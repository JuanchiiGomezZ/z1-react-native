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

type UseAudioPlayerProps = {
  audioUrl: string;
};

const useAudioPlayer = ({audioUrl}: UseAudioPlayerProps): UseAudioPlayer => {
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useProgress();

  useEffect(() => {
    const setupTrack = async () => {
      try {
        await TrackPlayer.add({
          id: 'trackId',
          url: audioUrl,
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
  }, [audioUrl]);

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
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error('Error toggling playback:', error);
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
