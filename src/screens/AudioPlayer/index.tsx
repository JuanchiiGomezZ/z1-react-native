import React from 'react';
import {RouteProp} from '@react-navigation/native';
import styled from 'styled-components/native';
import Container from '../../components/Container';
import Text from '../../components/Text';
import ProgressBar from './components/ProgressBar';
import PlayerToolbar from './components/PlayerToolbar';
import useAudioPlayer from '../../hooks/useTrackPlayer';
import {Item} from '../../graphql/types';
import AnimatedHeader from '../../components/AnimatedHeader';
import {CircularIconButton} from '../../components/Button/CircularButton';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import useNavigation from '../../hooks/useNavigation';
import {useTheme} from 'styled-components/native';
const StyledView = styled.View`
  flex: 1;
  padding-horizontal: ${({theme}) => theme.spacing.lg}px;
  padding-bottom: ${({theme}) => theme.spacing.xl}px;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${({theme}) => theme.borderRadius.lg}px;
  background-color: ${({theme}) => theme.colors.primary.dark};
  margin-vertical: ${({theme}) => theme.spacing.lg}px;
`;

const CloseContainer = styled.View`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export type AudioPlayerProps = Partial<Item> & {
  audioUrl: string;
};

type AudioPlayerRouteProps = {
  route: RouteProp<{AudioPlayer: AudioPlayerProps}, 'AudioPlayer'>;
};

const AudioPlayer = ({route}: AudioPlayerRouteProps) => {
  const {title, audioUrl, image} = route.params;
  const {isPlaying, togglePlayback, seekForward, seekBackward, progress} =
    useAudioPlayer({audioUrl});
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <Container>
      <CloseContainer>
        <CircularIconButton
          onPress={() => navigation.goBack()}
          iconProps={{icon: faXmark, color: colors.text, size: 35}}
          size={50}
        />
      </CloseContainer>
      <StyledView>
        <StyledImage
          source={{uri: image}}
          onError={() => console.log('Error loading image')}
        />
        <Text variant="title" size="xxl" align="center">
          {title}
        </Text>
        <ProgressBar
          progress={progress.position}
          duration={progress.duration}
        />
        <PlayerToolbar
          isPlaying={isPlaying}
          onTogglePlayback={togglePlayback}
          onSeekForward={() => seekForward(10)}
          onSeekBackward={() => seekBackward(10)}
          duration={progress.duration}
          position={progress.position}
        />
      </StyledView>
    </Container>
  );
};

export default AudioPlayer;
