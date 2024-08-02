import React from 'react';
import {RouteProp} from '@react-navigation/native';
import styled from 'styled-components/native';
import Container from '@/components/Container';
import Text from '@/components/Text';
import ProgressBar from './components/ProgressBar';
import PlayerToolbar from './components/PlayerToolbar';
import useAudioPlayer from '@/hooks/useTrackPlayer';
import {Lesson} from '@/graphql/types';
import {CircularIconButton} from '@/components/Button/CircularButton';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import useNavigation from '@/hooks/useNavigation';
import {useTheme} from 'styled-components/native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {ANIMATION_DURATION} from '@/constants';
import Image from '@/components/Image';
import VolumeControl from './components/VolumeControl';

const StyledView = styled.View`
  flex: 1;
  padding-horizontal: ${({theme}) => theme.spacing.lg}px;
  padding-bottom: ${({theme}) => theme.spacing.xl}px;
  justify-content: center;
  align-items: center;
`;

const CloseContainer = styled.View`
  position: absolute;
  top: ${({theme}) => theme.spacing.md}px;
  right: ${({theme}) => theme.spacing.lg}px;
`;

export type AudioPlayerProps = Partial<Lesson>;

type AudioPlayerRouteProps = {
  route: RouteProp<{AudioPlayer: AudioPlayerProps}, 'AudioPlayer'>;
};

const AudioPlayer = ({route}: AudioPlayerRouteProps) => {
  const {title, image, id} = route.params;
  const {isPlaying, togglePlayback, seekForward, seekBackward, progress} =
    useAudioPlayer(id);
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <Container>
      <CloseContainer>
        <CircularIconButton
          onPress={() => navigation.goBack()}
          iconProps={{icon: faXmark, color: colors.text}}
        />
      </CloseContainer>

      <StyledView>
        <VolumeControl />
        <Animated.View
          entering={FadeInDown.delay(ANIMATION_DURATION.FAST + 100)}>
          <Image source={{uri: image}} marginVertical="sm" />
          <Text variant="title" size="xxl" align="center">
            {title}
          </Text>
        </Animated.View>
        <ProgressBar {...progress} />
        <PlayerToolbar
          isPlaying={isPlaying}
          onTogglePlayback={togglePlayback}
          onSeekForward={() => seekForward(20)}
          onSeekBackward={() => seekBackward(20)}
        />
      </StyledView>
    </Container>
  );
};

export default AudioPlayer;
