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
  background-color: ${({theme}) => theme.colors.secondary};
`;

const ProgressBar = ({duration, position}: ProgressBarProps) => {
  const {colors} = useTheme();
  const remainingTime = useMemo(() => {
    return formatTime(Math.max(duration - position, 0));
  }, [duration, position]);

  return (
    <Animated.View
      style={{width: '100%', alignItems: 'flex-end'}}
      entering={FadeInDown.delay(ANIMATION_DURATION.FAST - 50)}>
      <ProgressContainer>
        <StyledProgressBar
          percentage={duration > 0 ? (position / duration) * 100 : 0}
        />
        <ProgressCircle />
      </ProgressContainer>
      <Text variant="bodyLarge">-{remainingTime}</Text>
    </Animated.View>
  );
};

export default ProgressBar;
