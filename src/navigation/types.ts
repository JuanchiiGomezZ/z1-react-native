import {Item} from '@/graphql/types';
import {AudioPlayerProps} from '@/screens/AudioPlayer';

export type TabNavigationScreens = {
  Home: undefined;
};

export type MainNavigationScreens = {
  TabNavigation: undefined;
  Details: Item;
  AudioPlayer: AudioPlayerProps;
};
