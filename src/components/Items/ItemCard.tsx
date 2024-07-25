import React, {memo} from 'react';
import styled, {useTheme} from 'styled-components/native';
import Text from '../Text';
import {Item} from '../../graphql/types';
import {SCREEN_WIDTH} from '../../utils';

const CardContainer = styled.Pressable`
  width: ${({theme}) =>
    SCREEN_WIDTH / 2 - theme.spacing.lg - theme.spacing.md / 2}px;
  border-radius: ${({theme}) => theme.borderRadius.lg}px;
  background-color: ${({theme}) => theme.colors.primary.default};
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

const ItemCard = memo(({id, image, title, category, author}: Item) => {
  const {colors} = useTheme();
  return (
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
        <Text variant="title">
          {title}
        </Text>
        <Text variant="bodySmall">{author}</Text>
        <CardContent />
      </CardContent>
    </CardContainer>
  );
});

export default ItemCard;
