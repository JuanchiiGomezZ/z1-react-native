import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Text from '../Text';
import {Item} from '../../graphql/types';
import {SCREEN_WIDTH} from '../../utils';
import theme from '../../theme';

const CardContainer = styled.Pressable`
  width: ${({theme}) => SCREEN_WIDTH / 2 - theme.spacing.md - 5}px;
  border-radius: ${({theme}) => theme.borderRadius.lg}px;
  background-color: ${({theme}) => theme.colors.primary.default};
`;

const CardImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

const CardContent = styled.View`
  padding: ${({theme}) => theme.spacing.sm}px;
  gap: ${({theme}) => theme.spacing.sm}px;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemCard = ({id, image, title, category, author}: Item) => {
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
        <Text variant="title" weight="bold">
          {title}
        </Text>
        <Text variant="bodySmall">{author}</Text>
        <CardContent />
      </CardContent>
    </CardContainer>
  );
};

export default ItemCard;
