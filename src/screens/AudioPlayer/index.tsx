import React from 'react';
import Container from '../../components/Container';
import Text from '../../components/Text';
import {Item} from '../../graphql/types';

export type AudioPlayerProps = Partial<Item> & {};
const AudioPlayer = ({}: AudioPlayerProps) => {
  return (
    <Container>
      <Text>AudioPlayer</Text>
    </Container>
  );
};
export default AudioPlayer;
