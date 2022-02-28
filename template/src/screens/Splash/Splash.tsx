import React, {
  useEffect
} from 'react';
import {
  View
} from 'react-native';
import {
  images
} from '../../assets/img';
import {
  Image
} from '../../components/atoms';
import {
  useNavigationHooks
} from '../../hooks';
import {
  MainAppStackTypes
} from '../../navigation/navigation-types';
import styles from './styles';


type SplashProps = {

}
function Splash({

}: SplashProps) {
  const { replace
  } = useNavigationHooks<MainAppStackTypes>()

  useEffect(() => {
    setTimeout(() => {
      replace("HomeStack")
    }, 2000);
  }, [])

  return (
    <View
      style={styles.container}>
      <Image
        style={styles.logo}
        source={images.logo} />
    </View>
  )
}

export default Splash
