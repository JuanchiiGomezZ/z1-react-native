import {AudioPlayerProps} from '@/screens/AudioPlayer';
import {DetailsScreenProps} from '@/screens/Details';

export type TabNavigationScreens = {
  Home: undefined;
};

export type MainNavigationScreens = {
  TabNavigation: undefined;
  Details: DetailsScreenProps;
  AudioPlayer: AudioPlayerProps;
};
