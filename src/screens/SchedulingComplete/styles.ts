import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import GetDoneSVG from '../../assets/done.svg';
import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  padding-top: ${height > 750 ? 96 : 30}px;
  background-color: ${({theme}) => theme.colors.background_dark};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_600};
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.light};
  margin-top: ${height > 750 ? 30 : 10}px;
`;

export const Message = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter_400};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text_detail};
  text-align: center;
  margin-top: 16px;
  line-height: 25px;
`;

export const DoneSVG = styled(GetDoneSVG).attrs({
  width: 80,
  height: 80
})`
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: ${height > 750 ? '80px 0' : '50px 0'};

`;