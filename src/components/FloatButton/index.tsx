import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Container
} from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {};

export function FloatButton({ onPress }: Props) {
  
  return (
    <Container onPress={onPress}>
      <Ionicons name="ios-car-sport" color="#fff" size={35}/>
    </Container>
  )
}