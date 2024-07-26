// Details.tsx
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Container from '../../components/Container';
import Text from '../../components/Text';
import {Item} from '../../graphql/types';
import AnimatedHeader from '../../components/AnimatedHeader';
import {useTheme} from 'styled-components/native';

type DetailsScreenRouteProp = RouteProp<{Details: Item}, 'Details'>;

interface DetailsProps {
  route: DetailsScreenRouteProp;
}

const Details = ({route}: DetailsProps) => {
  const {title, category} = route.params;
  const scrollY = useSharedValue(0);
  const {spacing} = useTheme();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Container>
      <AnimatedHeader title={title} scrollY={scrollY} scrollThreshold={100} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{paddingHorizontal: spacing.lg}}>
        <Text variant="category" size="lg">
          {category.title}
        </Text>
      </Animated.ScrollView>
    </Container>
  );
};

export default Details;
