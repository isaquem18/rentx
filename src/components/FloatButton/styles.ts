import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({theme}) => theme.colors.main};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: 0;
  right: ${RFPercentage(2)}px;
  bottom: ${RFPercentage(3)}px;
  justify-content: center;
  align-items: center;
`;