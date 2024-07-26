import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ProgressBarProps = {
  progress: number;
  duration: number;
};
const ProgressBar = ({progress, duration}: ProgressBarProps) => {
  return (
    <View style={styles.progressContainer}>
      <View
        style={[styles.progressBar, {width: `${(progress / duration) * 100}%`}]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressContainer: {
    height: 5,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1e88e5',
    borderRadius: 5,
  },
});
