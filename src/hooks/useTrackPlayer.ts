import {useState, useEffect, useCallback} from 'react';
import TrackPlayer, {Progress, useProgress} from 'react-native-track-player';

interface UseTrackPlayer {
  isPlaying: boolean;
  togglePlayback: () => Promise<void>;
  seekForward: (seconds: number) => Promise<void>;
  seekBackward: (seconds: number) => Promise<void>;
  progress: Progress;
}

type useTrackPlayerProps = {
  audioUrl: string;
};

const useTrackPlayer = ({audioUrl}: useTrackPlayerProps): UseTrackPlayer => {
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useProgress();
  useEffect(() => {
    const addTrack = async () => {
      await TrackPlayer.add({
        id: 'trackId',
        url: audioUrl,
        title: 'Track Title',
        artist: 'Track Artist',
      });
    };

    addTrack();
  }, []);

  const togglePlayback = useCallback(async () => {
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
  }, [isPlaying]);

  const seekForward = useCallback(async (seconds: number) => {
    const position = await TrackPlayer.getProgress();
    await TrackPlayer.seekTo(position.position + seconds);
  }, []);

  const seekBackward = useCallback(async (seconds: number) => {
    const position = await TrackPlayer.getProgress();
    await TrackPlayer.seekTo(position.position - seconds);
  }, []);

  return {
    isPlaying,
    togglePlayback,
    seekForward,
    seekBackward,
    progress,
  };
};

export default useTrackPlayer;
