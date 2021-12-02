import styled from 'styled-components/native';
import {
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { CarDTO } from '../../dtos/carDTO';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

interface SchedulesByUserProps {
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
  id: number;
}

export const RentedCarsList = styled(
  FlatList as new () => FlatList<SchedulesByUserProps>
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 20
  }
})`flex: 1;`;

export const Header = styled.View`
  height: ${RFPercentage(273 / 8.16)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape_dark};
  padding: 0 ${RFPercentage(24 / 8.16)}px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFPercentage(50 / 8.16)}px;
  margin-left: -${RFPercentage(24 / 8.16)}px;
`;

export const BackIcon = styled(Ionicons).attrs(({theme}) => ({
  name: 'chevron-back',
  size: 24,
  color: theme.colors.light
}))``;

export const HeaderTitle = styled.Text`
  color: ${({theme}) => theme.colors.light};
  margin-top: ${RFPercentage(22 / 8.16)}px;
  font-size: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.archivo_600};
`;

export const HeaderSubtitle = styled.Text`
  color: ${({theme}) => theme.colors.light};
  margin-top: ${RFPercentage(18 / 8.16)}px;
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.archivo_400};
`;

export const Appointments = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 29px 24px; 
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.inter_400};
`;

export const AppointmentsNumber = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.shape_dark};
  font-family: ${({theme}) => theme.fonts.archivo_500};
`;



export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.light};
  margin-top: -13px;
  margin-bottom: ${RFPercentage(16 / 8.16)}px;
  height: ${RFPercentage(40 / 8.16)}px;
  padding: 0 ${RFPercentage(24 / 8.16)}px;
`;

export const Period = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.archivo_500};
`;

export const Dates = styled.View`
  flex-direction: row;
`;

export const FirstDate = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.shape_dark};
  font-family: ${({theme}) => theme.fonts.inter_400};
`;

export const ArrowIcon = styled(FontAwesome).attrs(({theme}) => ({
  name: 'long-arrow-right',
  size: 14,
  color: theme.colors.text_detail
}))`
  margin: 0 10px;
  align-self: center;
`;

export const LastDate = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.shape_dark};
  font-family: ${({theme}) => theme.fonts.inter_400};
`;

