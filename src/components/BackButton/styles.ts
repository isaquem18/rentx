import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`
  margin: 0;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-left: -24px;
`;

export const BackButtonIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
`;