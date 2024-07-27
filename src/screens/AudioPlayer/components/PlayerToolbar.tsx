import React, {memo, useMemo} from 'react';
import styled from 'styled-components/native';
import {
  faPause,
  faPlay,
  faRotateLeft,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import {CircularIconButton} from '@/components/Button/CircularButton';
import {useTheme} from 'styled-components/native';
import Text from '@/components/Text';

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.md}px;
  gap: ${({theme}) => theme.spacing.md}px;
`;

type PlayerToolBarProps = {
  isPlaying: boolean;
  onTogglePlayback: () => void;
  onSeekForward: () => void;
  onSeekBackward: () => void;
  position: number;
  duration: number;
};

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const PlayerToolBar = ({
  isPlaying,
  onTogglePlayback,
  onSeekForward,
  onSeekBackward,
  duration,
  position,
}: PlayerToolBarProps) => {
  const {colors} = useTheme();
  const remainingTime = useMemo(() => {
    return formatTime(Math.max(duration - position, 0));
  }, [duration, position]);
  return (
    <>
      <Text variant="title">{remainingTime}</Text>
      <StyledRow>
        <CircularIconButton
          onPress={onSeekBackward}
          iconProps={{icon: faRotateLeft, color: colors.text, size: 25}}
          size={50}
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
          iconProps={{icon: faRotateRight, color: colors.text, size: 25}}
          size={50}
        />
      </StyledRow>
    </>
  );
};

export default memo(PlayerToolBar);
