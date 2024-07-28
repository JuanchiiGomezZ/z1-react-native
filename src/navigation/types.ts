import {Lesson} from '@/graphql/types';
import {AudioPlayerProps} from '@/screens/AudioPlayer';

export type TabNavigationScreens = {
  Home: undefined;
};

export type MainNavigationScreens = {
  TabNavigation: undefined;
  Details: Lesson;
  AudioPlayer: AudioPlayerProps;
};
