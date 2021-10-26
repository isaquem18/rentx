import React from 'react';
import { ImageSlider } from '../../components/ImageSlider';

import {
  StatusBar
} from 'react-native';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  About,
  Acessories,
  Footer
} from './styles';
import { Acessory } from '../../components/Acessory';
import { FooterButton } from '../../components/FooterButton';

export const CarDetails = () => {

  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Container>
        <Header>
          <CarImages>
            <ImageSlider />
          </CarImages>
        </Header>
        <Acessories>
          <Acessory 
            icon={SpeedSvg}
            name="380km/h"
          />
          <Acessory 
            icon={AccelerationSvg}
            name="3.2s"
          />
          <Acessory 
            icon={ForceSvg}
            name="800 HP"
          />
          <Acessory 
            icon={GasolineSvg}
            name="Gasolina"
          />
          <Acessory 
            icon={ExchangeSvg}
            name="Auto"
          />
          <Acessory 
            icon={PeopleSvg}
            name="2 pessoas"
          />
        </Acessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Container>
        <Footer>
          <FooterButton 
            title="Escolher período do aluguel"
            onPress={() => {
              console.log('clicou footer button');
            }}
          />
        </Footer>
    </>
  )
}