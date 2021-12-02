import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.shape_dark};
  width: 80px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.light};
`;