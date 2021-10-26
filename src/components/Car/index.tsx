import React from 'react';

import { 
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  Gasoline,
  CarImage
} from './styles';

interface carData {
  brand: string;
  name: string;
  image: string;
  rent: {
    period: string;
    price: number;
  }
}

interface Props {
  data: carData;
}

export const Car = ({ data: {
  brand,
  name,
  image,
  rent: {
    period,
    price
  }
}}: Props) => {

  let formattedPrice = Number(price)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  return (
    <Container>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <About>
          <Rent>
            <Period>{period}</Period>
            <Price>{formattedPrice}</Price>
          </Rent>
          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>
      <CarImage source={{uri: image}} />
    </Container>
  )
}

