import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Slider from '@react-native-community/slider';
import styled from 'styled-components/native';
import {faVolumeHigh, faVolumeXmark} from '@fortawesome/free-solid-svg-icons';
import TrackPlayer from 'react-native-track-player';
import {useTheme} from 'styled-components/native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {ANIMATION_DURATION} from '@/constants';
import {CircularIconButton} from '@/components/Button/CircularButton';
import Text from '@/components/Text';

const StyledSlider = styled(Slider)`
  flex: 1;
`;

const StyledAnimatedView = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({theme}) => theme.spacing.md}px;
  gap: ${({theme}) => theme.spacing.xs}px;
`;

const VolumeControl: React.FC = React.memo(() => {
  const [volume, setVolume] = useState<number>(1);
  const {colors} = useTheme();
  const isMuted = useMemo(() => volume === 0, [volume]);

  useEffect(() => {
    const getInitialVolume = async () => {
      try {
        const currentVolume = await TrackPlayer.getVolume();
        setVolume(currentVolume);
      } catch (error) {
        console.error('Error getting initial volume:', error);
      }
    };

    getInitialVolume();
  }, []);

  const handleVolumeChange = useCallback(async (value: number) => {
    try {
      setVolume(value);
      await TrackPlayer.setVolume(value);
    } catch (error) {
      console.error('Error setting volume:', error);
    }
  }, []);

  const handleMute = useCallback(async () => {
    try {
      const newVolume = isMuted ? 1 : 0;
      setVolume(newVolume);
      await TrackPlayer.setVolume(newVolume);
    } catch (error) {
      console.error('Error muting/unmuting:', error);
    }
  }, [isMuted]);

  return (
    <StyledAnimatedView
      entering={FadeInDown.delay(ANIMATION_DURATION.VERY_FAST + 150)}>
      <CircularIconButton
        iconProps={{
          icon: isMuted ? faVolumeXmark : faVolumeHigh,
          color: colors.text,
          size: 20,
        }}
        onPress={handleMute}
      />
      <StyledSlider
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleVolumeChange}
        minimumTrackTintColor={colors.secondary}
        maximumTrackTintColor={colors.primary.dark}
        thumbTintColor={colors.secondary}
      />
      <Text variant="bodyLarge">{(volume * 100).toFixed(0)}</Text>
    </StyledAnimatedView>
  );
});

export default VolumeControl;
