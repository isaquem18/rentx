import React from 'react';
import { ImageSlider } from '../../components/ImageSlider';

import {
  StatusBar
} from 'react-native';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
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
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
  car: CarDTO;
}

export const CarDetails = () => {

  const navigation = useNavigation<any>();

  const { car } = useRoute().params as Params;


  const handleSchedulingDetails = () => {
    navigation.navigate('Scheduling')
  }

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
            name={car.accessories[0].name}
          />
          <Acessory 
            icon={AccelerationSvg}
            name={car.accessories[1].name}
          />
          <Acessory 
            icon={ForceSvg}
            name={car.accessories[2].name}
          />
          <Acessory 
            icon={getAccessoryIcon(car.fuel_type)}
            name={car.accessories[3].name}
          />
          <Acessory 
            icon={ExchangeSvg}
            name={car.accessories[4].name}
          />
          <Acessory 
            icon={PeopleSvg}
            name={car.accessories[5].name}
          />
        </Acessories>
        <About>
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        {car.about}
        </About>
      </Container>
        <Footer>
          <FooterButton 
            title="Escolher período do aluguel"
            onPress={handleSchedulingDetails}
          />
        </Footer>
    </>
  )
}