import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: red;
  height: 92px;
  width: 32%;
  background-color: ${({theme}) => theme.colors.background_menu};
  margin-bottom: 8px;
  border-bottom-color: ${({theme}) => theme.colors.gray_border_bottom};
  border-bottom-width: 1px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.inter_500};
  font-size: ${RFValue(13)}px;
`;