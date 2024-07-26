import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components/native';

type ProgressBarProps = {
  progress: number;
  duration: number;
};
const ProgressBar = ({progress, duration}: ProgressBarProps) => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.progressContainer,
        {backgroundColor: colors.primary.dark},
      ]}>
      <View
        style={[
          styles.progressBar,
          {
            width: `${(progress / duration) * 100}%`,
            backgroundColor: colors.secondary,
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressContainer: {
    height: 10,
    width: '100%',
    borderRadius: 5,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
});
