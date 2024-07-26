import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import {Item} from '../../graphql/types';
import Button from '../../components/Button';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import styled from 'styled-components/native';
import ProgressBar from './components/ProgressBar';
import useTrackPlayer from '../../hooks/useTrackPlayer';

type AudioPlayerProps = Partial<Item> & {
  audioUrl: string;
};

const StyledView = styled.View`
  flex: 1;
  padding-horizontal: ${({theme}) => theme.spacing.lg}px;
  padding-bottom: ${({theme}) => theme.spacing.lg}px;
  justify-content: center;
  align-items: flex-end;
`;

const AudioPlayer = ({}: AudioPlayerProps) => {
  const {isPlaying, togglePlayback, seekForward, seekBackward, progress} =
    useTrackPlayer({
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    });

  return (
    <Container>
      <StyledView>
        <Button label={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} />
        <ProgressBar
          progress={progress.position}
          duration={progress.duration}
        />
      </StyledView>
    </Container>
  );
};
export default AudioPlayer;
