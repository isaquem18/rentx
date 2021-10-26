import React from 'react';
import { useTheme } from 'styled-components';

import {
  Container,
  BackButtonIcon
} from './styles';

interface Props {
  color?: string;
  onPress?: () => void; 
}

export const BackButton = ({
  color,
  ...rest
}: Props) => {

  const theme = useTheme();

  return (
    <Container {...rest}>
      <BackButtonIcon 
        name="chevron-left" 
        color={color ? color : theme.colors.background_dark}
      />
    </Container>
  )
}