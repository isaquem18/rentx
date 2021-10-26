import React from 'react';

import {
  Container,
  ButtonText
} from './styles';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
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