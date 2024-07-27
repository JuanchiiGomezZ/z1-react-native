// Header.tsx
import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,
  withTiming,
  interpolate,
  SharedValue,
  Extrapolation,
} from 'react-native-reanimated';
import {useTheme} from 'styled-components/native';
import {PressableIcon} from '@/components/Icon';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Text from '@/components/Text';

type HeaderProps = {
  title: string;
  scrollY: SharedValue<number>;
  scrollThreshold?: number;
  onPressArrow?: () => void;
};

const HEADER_HEIGHT = 55;

export const AnimatedHeader = ({
  title,
  scrollY,
  scrollThreshold,
  onPressArrow,
}: HeaderProps) => {
  const {colors, spacing} = useTheme();

  const animatedProgress = useDerivedValue(() => {
    return interpolate(
      scrollY.value,
      [0, scrollThreshold || 100],
      [0, 1],
      Extrapolation.CLAMP,
    );
  });

  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedProgress.value,
      [0, 1],
      [colors.primary.darker, colors.primary.default],
    );

    return {
      backgroundColor,
    };
  });

  const titleStyles = useAnimatedStyle(() => {
    const opacity = withTiming(animatedProgress.value, {duration: 150});
    return {opacity};
  });

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyles,
        {paddingHorizontal: spacing.lg},
      ]}>
      <PressableIcon
        icon={faArrowLeft}
        size={25}
        color={colors.text}
        onPress={onPressArrow}
      />
      <Animated.View style={[styles.titleContainer, titleStyles]}>
        <Text numberOfLines={1} variant="bodyLarge">
          {title}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADER_HEIGHT,
  } as ViewStyle,
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,
});

export default AnimatedHeader;
