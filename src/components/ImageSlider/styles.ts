import styled from 'styled-components/native';
import {
  Dimensions
} from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';


interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({theme, active}) => active ? 
  theme.colors.title  : theme.colors.text_detail};
  margin-left: 8px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px; 
  height: 132px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFPercentage(5)}px;
`;

export const CarImage = styled.Image`
  width: ${RFPercentage(34.5)}px;
  height: ${RFPercentage(16)}px;
  margin-top: ${RFPercentage(4)}px;
`;

export const Content = styled.View`
  margin: ${RFPercentage(3)}px 0 ${RFPercentage(3)}px 0;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.title};
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
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.main};
  text-transform: uppercase;
`;


