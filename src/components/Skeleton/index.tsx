import React, {ReactNode, useEffect} from 'react';
import {DimensionValue} from 'react-native';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type SkeletonProps = {
  animationDuration?: number;
  minOpacity?: number;
  maxOpacity?: number;
  children?: ReactNode;
  width?: DimensionValue;
  height?: DimensionValue;
};

const Skeleton = ({
  animationDuration = 1000,
  minOpacity = 0.3,
  maxOpacity = 1,
  children,
  width,
  height,
}: SkeletonProps) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, {duration: animationDuration}),
      -1,
      true,
    );
  }, [animationDuration, opacity]);

  const skeletonStyle = useAnimatedStyle(() => {
    return {
      opacity: minOpacity + (maxOpacity - minOpacity) * opacity.value,
      width: width || '100%',
      height: height || 'auto',
    };
  });

  return (
    <Animated.View entering={FadeIn}>
      <Animated.View style={skeletonStyle}>{children}</Animated.View>
    </Animated.View>
  );
};

export default Skeleton;
