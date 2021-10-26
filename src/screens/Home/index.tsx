import React from 'react';
import { 
  FlatList,
  StatusBar
} from 'react-native';
import { Car } from '../../components/Car';

import { 
  Container,
  Header,
  LogoHeader,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

const data = [
  {
    id: 1,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
  {
    id: 2,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
  {
    id: 3,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
  {
    id: 4,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
  {
    id: 5,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
  {
    id: 6,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
  {
    id: 7,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
  {
    id: 8,
    brand: 'audi',
    name: 'RS 5 Coupe',
    image: 'https://tmdcobreq.com.br/lancamentos/N-2071_A5/N-2071_A5-IMAGEM-CARRO.png',
    rent: {
      period: 'ao dia',
      price: 177.50
    }
  },
]

export const Home = () => {
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <LogoHeader />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Car data={item} />
        )}
      />
    </Container>
  )
}
