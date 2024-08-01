import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  FadeInDown,
  FadeIn,
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
import {ANIMATION_DURATION} from '@/constants';
import Image from '@/components/Image';
import Footer from '@/components/Footer';
import {useItemDetails} from '@/hooks/useItemDetails';
import DetailsSkeleton from './components/DetailsSkeleton';
import ErrorState from '@/components/ErrorState';

type DetailsScreenRouteProp = RouteProp<{Details: Lesson}, 'Details'>;

type DetailsProps = {
  route: DetailsScreenRouteProp;
};

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledFixedContainer = styled(Animated.View)`
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

const StyledScrollView = styled(Animated.ScrollView)`
  padding-horizontal: ${({theme}) => theme.spacing.lg}px;
`;

const Details = ({route}: DetailsProps) => {
  const {item, error, loading} = useItemDetails(route.params.id);
  const {title, image, author, content, category, id} = item || {};
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);
  const {colors} = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const toggleFavorite = useDebounce(() => {
    setIsFavorite(prev => !prev);
  }, 500);

  const handleListenNow = () => {
    navigation.navigate('AudioPlayer', {
      title,
      image,
      id,
    });
  };

  const RenderContent = () => (
    <>
      <StyledScrollView
        entering={FadeIn.delay(ANIMATION_DURATION.VERY_FAST).duration(
          ANIMATION_DURATION.FAST,
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingBottom: 70}}>
        <Text variant="category" size="lg">
          {category?.title}
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
        <Image source={{uri: image}} />
        <Text variant="body">{content}</Text>
        <Footer />
      </StyledScrollView>
      <StyledFixedContainer
        entering={FadeInDown.delay(ANIMATION_DURATION.MEDIUM).duration(
          ANIMATION_DURATION.FAST,
        )}>
        <Button
          variant="primary-focus"
          label="Listen now"
          rightIcon={<Icon icon={faPlay} size={20} color={colors.text} />}
          onPress={handleListenNow}
        />
      </StyledFixedContainer>
    </>
  );

  if (error) {
    return (
      <Container>
        <ErrorState />
      </Container>
    );
  }

  return (
    <Container>
      <AnimatedHeader
        title={title}
        scrollY={scrollY}
        scrollThreshold={130}
        onPressArrow={() => navigation.goBack()}
      />
      {loading ? <DetailsSkeleton /> : <RenderContent />}
    </Container>
  );
};

export default Details;
