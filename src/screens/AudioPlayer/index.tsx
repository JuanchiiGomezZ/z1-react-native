import React from 'react';
import Container from '../../components/Container';
import {Item} from '../../graphql/types';
import styled, {useTheme} from 'styled-components/native';
import ProgressBar from './components/ProgressBar';
import useTrackPlayer from '../../hooks/useTrackPlayer';
import {AudioButton} from './components/AudioControls';
import {
  faPause,
  faPlay,
  faRotateLeft,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import Text from '../../components/Text';
import {RouteProp} from '@react-navigation/native';

export type AudioPlayerProps = Partial<Item> & {
  audioUrl: string;
};
type AudioPlayerScreenRoute = RouteProp<
  {AudioPlayer: AudioPlayerProps},
  'AudioPlayer'
>;
type AudioPlayerRoute = {
  route: AudioPlayerScreenRoute;
};

const StyledView = styled.View`
  flex: 1;
  padding-horizontal: ${({theme}) => theme.spacing.lg}px;
  padding-bottom: ${({theme}) => theme.spacing.xl}px;
  justify-content: flex-end;
  align-items: center;
`;

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.md}px;
  gap: ${({theme}) => theme.spacing.md}px;
`;

const AudioPlayer = ({route}: AudioPlayerRoute) => {
  const {title, audioUrl} = route.params;

  const {isPlaying, togglePlayback, seekForward, seekBackward, progress} =
    useTrackPlayer({
      audioUrl,
    });

  const {colors} = useTheme();
  return (
    <Container>
      <StyledView>
        <Text variant="title" size="xxl" align="center">
          {title}
        </Text>
        <ProgressBar
          progress={progress.position}
          duration={progress.duration}
        />
        <StyledRow>
          <AudioButton
            onPress={() => seekBackward(10)}
            iconProps={{icon: faRotateLeft, color: colors.text, size: 25}}
            size={50}
          />
          <AudioButton
            onPress={togglePlayback}
            iconProps={{
              icon: isPlaying ? faPause : faPlay,
              color: colors.text,
              size: 45,
            }}
            size={70}
          />
          <AudioButton
            onPress={() => seekForward(10)}
            iconProps={{icon: faRotateRight, color: colors.text, size: 25}}
            size={50}
          />
        </StyledRow>
      </StyledView>
    </Container>
  );
};
export default AudioPlayer;
