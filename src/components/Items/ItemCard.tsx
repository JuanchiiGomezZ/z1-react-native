import React, {memo} from 'react';
import styled, {useTheme} from 'styled-components/native';
import Text from '../Text';
import {Item} from '../../graphql/types';
import {Pressable} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

type ItemCardProps = Item & {
  onPress?: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CardContainer = styled.View`
  width: 100%;
`;

const CardImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

const CardContent = styled.View`
  padding-horizontal: ${({theme}) => theme.spacing.md}px;
  padding-vertical: ${({theme}) => theme.spacing.sm}px;
  gap: ${({theme}) => theme.spacing.sm}px;
`;

const ItemCard = memo(
  ({id, image, title, category, author, onPress}: ItemCardProps) => {
    const {colors, borderRadius} = useTheme();
    return (
      <AnimatedPressable
        entering={FadeIn}
        exiting={FadeOut}
        style={{
          flex: 1,
          backgroundColor: colors.primary.default,
          borderRadius: borderRadius.md,
        }}
        onPress={onPress}>
        <CardContainer>
          <CardImage
            source={{
              uri: image,
            }}
          />
          <CardContent>
            <Text variant="bodyLarge" color={colors.secondary}>
              {category.title}
            </Text>
            <Text variant="title">{title}</Text>
            <Text variant="bodySmall">{author}</Text>
            <CardContent />
          </CardContent>
        </CardContainer>
      </AnimatedPressable>
    );
  },
);

export default ItemCard;
