import React from 'react';
import { BackButton } from '../BackButton';
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price

} from './styles';
import { Acessory } from '../Acessory';

export const ImageSlider = () => {

  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton
          color={theme.colors.text_detail}
        />
        <ImageIndexes>
          <ImageIndex active={false}/>
          <ImageIndex active={false}/>
          <ImageIndex active={false}/>
          <ImageIndex active={true}/>
        </ImageIndexes>
      </Header>
      <CarImageWrapper>
        <CarImage 
          source={{uri: 'https://pngimg.com/uploads/ferrari/ferrari_PNG10664.png'}}
          resizeMode="contain"
        />
      </CarImageWrapper>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
      </Content>
    </Container>
  )
}