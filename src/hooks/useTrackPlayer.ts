import {getRandomNumber} from '@/utils';
import {useState, useEffect, useCallback} from 'react';
import TrackPlayer, {
  Event,
  Progress,
  useProgress,
} from 'react-native-track-player';

type UseAudioPlayer = {
  isPlaying: boolean;
  togglePlayback: () => Promise<void>;
  seekForward: (seconds: number) => Promise<void>;
  seekBackward: (seconds: number) => Promise<void>;
  progress: Progress;
};

const useAudioPlayer = (id: string | undefined): UseAudioPlayer => {
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useProgress();

  useEffect(() => {
    const setupTrack = async () => {
      try {
        await TrackPlayer.add({
          id,
          url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${getRandomNumber(
            1,
            17,
          )}.mp3`,
          title: 'Track Title',
          artist: 'Track Artist',
        });

        // Configurar el evento para cuando termine la pista
        await TrackPlayer.addEventListener(
          Event.PlaybackQueueEnded,
          async () => {
            await TrackPlayer.seekTo(0);
            setIsPlaying(false);
          },
        );
      } catch (error) {
        console.error('Error setting up track:', error);
      }
    };

    setupTrack();

    return () => {
      TrackPlayer.reset();
    };
  }, []);

  const togglePlayback = useCallback(async () => {
    try {
      const currentTrack = await TrackPlayer.getActiveTrackIndex();
      if (currentTrack === null) {
        await TrackPlayer.play();
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          await TrackPlayer.pause();
        } else {
          await TrackPlayer.play();
        }
        setIsPlaying(prev => !prev);
      }
    } catch (error) {
      console.error('Error toggling playback:', error); //TOAST ON ERRORS
    }
  }, [isPlaying]);

  const seekTo = useCallback(async (seconds: number) => {
    try {
      const {position} = await TrackPlayer.getProgress();
      await TrackPlayer.seekTo(position + seconds);
    } catch (error) {
      console.error('Error seeking:', error);
    }
  }, []);

  const seekForward = useCallback(
    (seconds: number) => seekTo(seconds),
    [seekTo],
  );
  const seekBackward = useCallback(
    (seconds: number) => seekTo(-seconds),
    [seekTo],
  );

  return {
    isPlaying,
    togglePlayback,
    seekForward,
    seekBackward,
    progress,
  };
};

export default useAudioPlayer;
