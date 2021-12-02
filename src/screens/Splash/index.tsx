import React, { useEffect } from 'react';
import { Button, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import NameIcon from '../../assets/logo.svg';
import LogoXSvg from '../../assets/union.svg';


import {
  Container
} from './styles';

export const Splash = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const navigation = useNavigation<any>();

  const animationOpacity = useSharedValue(0);

  const animatedName = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animationOpacity.value,
        [0, 0.15, 0.45, 1],
        [0, 1, 0, 1],
        Extrapolate.CLAMP)
    }
  })

  function handleGoToHome() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    animationOpacity.value = withTiming(1, { duration: 1500 }, () => {
      runOnJS(handleGoToHome)()
    });
  }, [])
 
  return (
    <Container height={height} width={width}>
      <Animated.View style={[{flexDirection: 'row'}, animatedName]}>
        <LogoXSvg width={80} height={50} style={{marginRight: 20}}/>
        <NameIcon width={130} height={50} style={{marginRight: 20}}/>
      </Animated.View>   
    </Container>
  )
}
