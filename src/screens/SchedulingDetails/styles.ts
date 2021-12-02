import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import theme from '../../styles/theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingBottom: 50
  },
  showsVerticalScrollIndicator: false
})`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  
  margin-top: ${RFPercentage(6)}px;
`;

export const CarImages = styled.View`
  width: 100%;
`;

export const Acessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${RFPercentage(3)}px;
`;

export const Footer = styled.View`
  height: ${RFPercentage(14)}px;
  width: 100%;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background_menu};
  padding: 0 24px;
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  margin-top: 30px;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.line};
  padding-bottom: 16px;
`;

export const CalendarIconBox = styled.View`
  background-color: ${({theme}) => theme.colors.main};
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const CalendarIcon = styled(Feather).attrs(({theme}) => ({
  color: theme.colors.light
}))`
  font-size: ${RFValue(24)}px;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.archivo_500};
  color: ${({theme}) => theme.colors.text_detail};
`;

export const RentalPriceDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const RentalPriceQuota = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.archivo_500};
  color: ${({theme}) => theme.colors.text};
`;

export const RentalPriceTotal = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.archivo_500};
  color: ${({theme}) => theme.colors.success};
`;
