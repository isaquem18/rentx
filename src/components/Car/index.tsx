import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CarDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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

interface Props extends RectButtonProps {
  data: CarDTO;
}

export const Car = ({ data: {
  brand,
  name,
  thumbnail,
  fuel_type,
  rent: {
    period,
    price
  }
}, ...rest}: Props) => {

  let formattedPrice = Number(price)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  const FuelType = getAccessoryIcon(fuel_type)
    
  return (
    <Container {...rest}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <About>
          <Rent>
            <Period>{period}</Period>
            <Price>{formattedPrice}</Price>
          </Rent>
          <Type>
           <FuelType />
          </Type>
        </About>
      </Details>
      <CarImage source={{uri: thumbnail}} />
    </Container>
  )
}

