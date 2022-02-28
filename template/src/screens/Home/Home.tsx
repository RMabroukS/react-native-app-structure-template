import React from 'react';
import {
  View
} from 'react-native';
import { Text } from '../../components/atoms';
import styles from './styles';


type HomeProps = {

}
function Home({

}: HomeProps) {
  return (
    <View
      style={styles.container}>
      <Text >{"Home"}</Text>
    </View>
  )
}

export default Home
