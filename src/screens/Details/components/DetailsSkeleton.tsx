import React from 'react';
import styled from 'styled-components/native';
import {DefaultTheme} from 'styled-components/native';
import Skeleton from '@/components/Skeleton';
import {SKELETON_HEIGHTS} from '@/constants';

// Tipos
type SpacingKey = keyof DefaultTheme['spacing'];

interface BoxProps {
  width?: number | string;
  height?: number | string;
  marginVertical?: SpacingKey;
}

interface SkeletonItemsProps extends BoxProps {
  count?: number;
}

const Box = styled.View<BoxProps>`
  width: ${({width}) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({height}) =>
    typeof height === 'number' ? `${height}px` : height};
  margin-vertical: ${({theme, marginVertical}) =>
    marginVertical ? theme.spacing[marginVertical] : 0}px;
  border-radius: ${({theme}) => theme.borderRadius.md}px;
  background-color: ${({theme}) => theme.colors.primary.dark};
`;

const Container = styled.View`
  padding-horizontal: ${({theme}) => theme.spacing.lg}px;
  gap: ${({theme}) => theme.spacing.sm}px;
`;


const SkeletonItems = ({count = 1, ...props}: SkeletonItemsProps) => (
  <>
    {Array.from({length: count}).map((_, index) => (
      <Box key={index} {...props} />
    ))}
  </>
);

const DetailsSkeleton = () => (
  <Skeleton>
    <Container>
      <Box height={SKELETON_HEIGHTS.BODY} width={200} />
      <Box height={SKELETON_HEIGHTS.TITLE} width="100%" />
      <Box height={SKELETON_HEIGHTS.SUBTITLE} width="100%" />
      <Box
        width="100%"
        height={SKELETON_HEIGHTS.FULL_WIDTH}
        marginVertical="md"
      />
      <SkeletonItems height={SKELETON_HEIGHTS.BODY} width="100%" count={10} />
    </Container>
  </Skeleton>
);

export default DetailsSkeleton;
