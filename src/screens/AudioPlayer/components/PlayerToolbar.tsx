import React, {memo} from 'react';
import styled from 'styled-components/native';
import {
  faPause,
  faPlay,
  faRotateLeft,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import {CircularIconButton} from '@/components/Button/CircularButton';
import {useTheme} from 'styled-components/native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {ANIMATION_DURATION} from '@/constants';

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacing.md}px;
`;

type PlayerToolBarProps = {
  isPlaying: boolean;
  onTogglePlayback: () => void;
  onSeekForward: () => void;
  onSeekBackward: () => void;
};

const PlayerToolBar = ({
  isPlaying,
  onTogglePlayback,
  onSeekForward,
  onSeekBackward,
}: PlayerToolBarProps) => {
  const {colors} = useTheme();

  return (
    <Animated.View entering={FadeInDown.delay(ANIMATION_DURATION.SLOW)}>
      <StyledRow>
        <CircularIconButton
          onPress={onSeekBackward}
          iconProps={{icon: faRotateLeft, color: colors.text}}
        />
        <CircularIconButton
          onPress={onTogglePlayback}
          iconProps={{
            icon: isPlaying ? faPause : faPlay,
            color: colors.text,
            size: 45,
          }}
          size={70}
        />
        <CircularIconButton
          onPress={onSeekForward}
          iconProps={{icon: faRotateRight, color: colors.text}}
        />
      </StyledRow>
    </Animated.View>
  );
};

export default memo(PlayerToolBar);
