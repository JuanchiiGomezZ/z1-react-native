// Details.tsx
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  FadeInDown,
} from 'react-native-reanimated';
import Container from '@/components/Container';
import Text from '@/components/Text';
import {Lesson} from '@/graphql/types';
import AnimatedHeader from '@/components/AnimatedHeader';
import styled, {useTheme} from 'styled-components/native';
import useNavigation from '@/hooks/useNavigation';
import {Icon, PressableIcon} from '@/components/Icon';
import {faHeart, faPlay} from '@fortawesome/free-solid-svg-icons';
import useDebounce from '@/hooks/useDebounce';
import Button from '@/components/Button';
import {getRandomNumber} from '@/utils';
import {ANIMATION_DURATION} from '@/constants';
import Image from '@/components/Image';
import Footer from '@/components/Footer';

type DetailsScreenRouteProp = RouteProp<{Details: Lesson}, 'Details'>;

type DetailsProps = {
  route: DetailsScreenRouteProp;
};

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledFixedContainer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary.darker};
  padding: ${({theme}) => theme.spacing.lg}px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-width: 0.5px;
  border-top-color: ${({theme}) => theme.colors.secondary};
`;

const Details = ({route}: DetailsProps) => {
  const {title, category, author, image, content} = route.params;
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);
  const {spacing, colors} = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const toggleFavorite = useDebounce(() => {
    setIsFavorite(prev => !prev);
  }, 500);

  return (
    <Container>
      <AnimatedHeader
        title={title}
        scrollY={scrollY}
        scrollThreshold={130}
        onPressArrow={() => navigation.goBack()}
      />
      <Animated.ScrollView
        entering={FadeInDown.delay(ANIMATION_DURATION.VERY_FAST).duration(
          ANIMATION_DURATION.FAST,
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingBottom: 100,
          paddingHorizontal: spacing.lg,
        }}>
        <Text variant="category" size="lg">
          {category.title}
        </Text>
        <Text variant="header">{title}</Text>
        <StyledRow>
          <Text variant="body">{author}</Text>
          <PressableIcon
            icon={faHeart}
            size={30}
            color={isFavorite ? colors.red : colors.primary.dark}
            onPress={toggleFavorite}
          />
        </StyledRow>
        <Image
          source={{uri: image}}
          onError={() => console.log('Error loading image')}
        />
        <Text variant="body">{content}</Text>
        <Footer />
      </Animated.ScrollView>
      <Animated.View
        entering={FadeInDown.delay(ANIMATION_DURATION.MEDIUM).duration(
          ANIMATION_DURATION.FAST,
        )}>
        <StyledFixedContainer>
          <Button
            variant="primary-focus"
            label="Listen now"
            rightIcon={<Icon icon={faPlay} size={20} color={colors.text} />}
            onPress={() =>
              navigation.navigate('AudioPlayer', {
                title,
                image,
                audioUrl: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${getRandomNumber(
                  1,
                  17,
                )}.mp3`,
              })
            }
          />
        </StyledFixedContainer>
      </Animated.View>
    </Container>
  );
};

export default Details;
