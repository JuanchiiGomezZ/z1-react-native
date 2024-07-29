import React, {memo} from 'react';
import styled from 'styled-components/native';
import Text from '@/components/Text';
import {Lesson} from '@/graphql/types';
import {Pressable} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

type ItemCardProps = Lesson & {
  onPress?: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CardContainer = styled(AnimatedPressable)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary.default};
  border-radius: ${({theme}) => theme.borderRadius.md}px;
  max-width: 50%;
`;

const CardImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({theme}) => theme.colors.primary.dark};
  border-top-left-radius: ${({theme}) => theme.borderRadius.md}px;
  border-top-right-radius: ${({theme}) => theme.borderRadius.md}px;
`;

const CardContent = styled.View`
  padding-horizontal: ${({theme}) => theme.spacing.md}px;
  padding-vertical: ${({theme}) => theme.spacing.sm}px;
  gap: ${({theme}) => theme.spacing.sm}px;
`;

const LessonCard = memo(
  ({image, title, category, author, onPress}: ItemCardProps) => {
    return (
      <CardContainer entering={FadeIn} exiting={FadeOut} onPress={onPress}>
        <CardImage
          source={{
            uri: image,
          }}
        />
        <CardContent>
          <Text variant="category">{category.title}</Text>
          <Text variant="title" numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text variant="bodySmall">{author}</Text>
          <CardContent />
        </CardContent>
      </CardContainer>
    );
  },
);

export default LessonCard;
