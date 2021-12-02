import React, { ReactNode } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  ButtonText
} from './styles';

interface Props extends RectButtonProps {
  title: string | ReactNode;
  onPress: () => void;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export const FooterButton = ({
  title,
  ...rest
}: Props) => {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}