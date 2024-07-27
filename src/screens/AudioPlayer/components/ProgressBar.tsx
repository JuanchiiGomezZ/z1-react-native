import {ANIMATION_DURATION} from '@/assets/data';
import Text from '@/components/Text';
import React, {useMemo} from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {Progress} from 'react-native-track-player';
import styled, {useTheme} from 'styled-components/native';

type ProgressBarProps = Progress;
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const ProgressContainer = styled.View`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary.dark};
`;

const ProgressCircle = styled.View`
  width: 18px;
  aspect-ratio: 1;
  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.secondary};
  position: relative;
  right: 9px;
`;

interface StyledProgressBarProps {
  percentage: number;
}

const StyledProgressBar = styled.View<StyledProgressBarProps>`
  width: ${({percentage}) => `${percentage}%`};
  height: 100%;
  background-color: ${({theme}) => theme.colors.secondary};
  border-top-left-radius: ${({theme}) => theme.borderRadius.full}px;
  border-bottom-left-radius: ${({theme}) => theme.borderRadius.full}px;
`;

const ProgressBar = ({duration, position}: ProgressBarProps) => {
  const {spacing} = useTheme();
  const remainingTime = useMemo(() => {
    return formatTime(Math.max(duration - position, 0));
  }, [duration, position]);

  return (
    <Animated.View
      style={{width: '100%', alignItems: 'flex-end', marginTop: spacing.lg}}
      entering={FadeInDown.delay(ANIMATION_DURATION.FAST + 100)}>
      <ProgressContainer>
        <StyledProgressBar percentage={(position / duration) * 100} />
        <ProgressCircle />
      </ProgressContainer>
      <Text variant="bodyLarge">-{remainingTime}</Text>
    </Animated.View>
  );
};

export default ProgressBar;
