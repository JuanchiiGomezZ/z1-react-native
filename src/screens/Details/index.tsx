// Details.tsx
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Container from '../../components/Container';
import Text from '../../components/Text';
import {Item} from '../../graphql/types';
import AnimatedHeader from '../../components/AnimatedHeader';
import styled, {useTheme} from 'styled-components/native';
import useNavigation from '../../hooks/useNavigation';
import {PressableIcon} from '../../components/Icon';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import useDebounce from '../../hooks/useDebounce';

type DetailsScreenRouteProp = RouteProp<{Details: Item}, 'Details'>;

type DetailsProps = {
  route: DetailsScreenRouteProp;
};

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  const {spacing, colors, borderRadius} = useTheme();
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
        scrollThreshold={100}
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
        <StyledImage source={{uri: image}} />
        <Text variant="body">{content}</Text>
      </Animated.ScrollView>
    </Container>
  );
};

export default Details;
