import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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

export const About = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter_400};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
  line-height: 25px;
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