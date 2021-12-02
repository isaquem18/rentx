import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler';

import GasolineStyle from '../../assets/gasoline.svg';

export const Container = styled(RectButton).attrs<RectButtonProps>(({theme}) => ({
  underlayColor: '#000',
  activeOpacity: 0.2
}))`
  background-color: ${({theme}) => theme.colors.background_secondary};
  flex-direction: row;
  padding: ${RFValue(17)}px ${RFValue(20)}px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Gasoline = styled(GasolineStyle).attrs({

})`
  margin-left: ${RFValue(24)}px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.archivo_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 16px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.main};
  margin-top: 4px;
`;

export const Type = styled.View`
  flex: 1;
  min-width: ${RFPercentage(7)}px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',

})`
  width: ${RFValue(160)}px;
  height: ${RFValue(85)}px;
`;