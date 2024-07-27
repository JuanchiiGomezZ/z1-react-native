// Details.tsx
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Container from '@/components/Container';
import Text from '@/components/Text';
import {Item} from '@/graphql/types';
import AnimatedHeader from '@/components/AnimatedHeader';
import styled, {useTheme} from 'styled-components/native';
import useNavigation from '@/hooks/useNavigation';
import {Icon, PressableIcon} from '@/components/Icon';
import {faHeart, faPlay} from '@fortawesome/free-solid-svg-icons';
import useDebounce from '@/hooks/useDebounce';
import Button from '@/components/Button';
import {getRandomNumber} from '@/utils';

type DetailsScreenRouteProp = RouteProp<{Details: Item}, 'Details'>;

type DetailsProps = {
  route: DetailsScreenRouteProp;
};

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.spacing.md}px;
`;

const StyledImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${({theme}) => theme.borderRadius.lg}px;
  background-color: ${({theme}) => theme.colors.primary.dark};
  margin-vertical: ${({theme}) => theme.spacing.lg}px;
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
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingBottom: spacing.xl,
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
            color={isFavorite ? colors.primary.dark : colors.red}
            onPress={toggleFavorite}
          />
        </StyledRow>
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
        <StyledImage
          source={{uri: image}}
          onError={() => console.log('Error loading image')}
        />

        <Text variant="body">{content}</Text>
      </Animated.ScrollView>
    </Container>
  );
};

export default Details;
