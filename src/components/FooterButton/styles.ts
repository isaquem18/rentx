import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface Props extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<Props>`
  background-color: ${({theme, color}) => color ? color : theme.colors.main};
  height: ${RFPercentage(6.8)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${getBottomSpace() ? getBottomSpace() - 20 : 0}px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.light};
  font-family: ${({theme}) => theme.fonts.inter_500};
  font-size: ${RFValue(15)}px;
`;