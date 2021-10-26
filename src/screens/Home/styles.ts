import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import {
  FlatList
} from 'react-native';

interface carData {
  id: number;
  brand: string;
  name: string;
  image: string;
  rent: {
    period: string;
    price: number;
  }
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({theme}) => theme.colors.background_dark};
  justify-content: flex-end;

  padding: 0 ${RFValue(24)}px ${RFValue(32)}px ${RFValue(16)}px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;

export const LogoHeader = styled(Logo).attrs({
  width: `${RFValue(108)}px`,
  height: `${RFValue(12)}px`
})``;

export const TotalCars = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.inter_400};
    font-size: ${RFValue(15)}px;
`;

export const CarList = styled(
  FlatList as new () => FlatList<carData>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false
})``;

