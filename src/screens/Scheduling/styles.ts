import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(44)}px;
  background-color: ${({theme}) => theme.colors.background_dark};
  justify-content: center;
  padding: 25px;
  position: relative;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.light};
  font-size: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.archivo_600};
  width: ${RFPercentage(32)}px;
`;

export const BackButtonBox = styled.View`
  position: absolute;
  top: ${RFPercentage(6)}px;
  left: 24px;
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  position: absolute;
  width: 100%;
  align-items: flex-start;
  align-self: center;
  justify-content: space-between;
  height: ${RFPercentage(10)}px;
  bottom: 0;
  
`;

export const ArrowBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

interface DateInfoProps {
  selected?: boolean;
}


export const DateInfo = styled.View<DateInfoProps>`
  ${({selected}) => !selected && css`border-bottom-width: 1px`};
  ${({theme, selected}) => !selected && 
    css`border-bottom-color: ${theme.colors.text}`};
  height: 40px;
`;

export const DateTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.archivo_500};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text`
  width: ${RFPercentage(15)}px;
  flex: 1;
  margin-top: ${RFPercentage(1)}px;
  color: ${({theme}) => theme.colors.light};
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.inter_500};

`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24
  }
})``;

export const Footer = styled.View`
  margin-top: ${RFPercentage(4)}px;
`;
