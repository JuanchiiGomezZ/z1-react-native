import {AudioPlayerProps} from '@/screens/AudioPlayer';

export type TabNavigationScreens = {
  Home: undefined;
};

export type MainNavigationScreens = {
  TabNavigation: undefined;
  Details: {id: string};
  AudioPlayer: AudioPlayerProps;
};
