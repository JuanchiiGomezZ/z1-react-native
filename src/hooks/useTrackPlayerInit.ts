import {useState, useEffect} from 'react';
import TrackPlayer from 'react-native-track-player';

type UseTrackPlayerInitProps = {
  isLoading: boolean;
};

const useTrackPlayerInit = (): UseTrackPlayerInitProps => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
      } catch (error) {
        console.error('Error setting up TrackPlayer:', error);
      } finally {
        setIsLoading(false);
      }
    };

    setupPlayer();
  }, []);

  return {isLoading};
};

export default useTrackPlayerInit;
