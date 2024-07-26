import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import {Item} from '../../graphql/types';
import Button from '../../components/Button';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import styled from 'styled-components/native';
import ProgressBar from './components/ProgressBar';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useProgress();

  useEffect(() => {
    TrackPlayer.add({
      id: 'trackId',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'Track Title',
      artist: 'Track Artist',
    });
  }, []);

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();
    if (currentTrack === null) {
      await TrackPlayer.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        await TrackPlayer.pause();
        setIsPlaying(false);
      } else {
        await TrackPlayer.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <Container>
      <StyledView>
        <Button label="Play" onPress={togglePlayback} />
        <ProgressBar
          progress={progress.position}
          duration={progress.duration}
        />
      </StyledView>
    </Container>
  );
};
export default AudioPlayer;
