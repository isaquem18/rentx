import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
  height: number;
  width: number;
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_dark};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;

