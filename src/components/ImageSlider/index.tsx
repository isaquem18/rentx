import React, { useRef, useState } from 'react';
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
import { useRoute, useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/carDTO';
import { useCar } from '../../context/SelectedCar';
import { FlatList, ViewToken } from 'react-native';

export const ImageSlider = () => {
  const [ imageIndex, setImageIndex ] = useState(0);
  const theme = useTheme();
  const navigation = useNavigation();
  const { car, setCar } = useCar();

  const handleBackButton = () => {
    navigation.goBack();
  }

  const formattedPrice = Number(car.rent.price)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

  interface ChangeImageProps {
    changed: ViewToken[];
    viewableItems: ViewToken[];
  }

  const indexChanged = useRef(({ changed, viewableItems }: ChangeImageProps) => {
    const index = viewableItems[0].index!;

    console.log(viewableItems);

    setImageIndex(index);
  });

  return (
    <Container>
      <Header>
        <BackButton
          color={theme.colors.text_detail}
          onPress={handleBackButton}
        />
        <ImageIndexes>
          { car.photos.map((item, index) => <ImageIndex active={index === imageIndex} key={item} />)}
        </ImageIndexes>
      </Header>
      <FlatList 
        data={car.photos}
        keyExtractor={key=>key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        renderItem={({item, index}) => (
          <CarImageWrapper>
          <CarImage 
            source={{uri: item}}
            resizeMode="contain"
          />
        </CarImageWrapper>
        )}
      />
      <Content>
        <Details>
          <Description>
            <Brand>{car?.brand}</Brand>
            <Name>{car?.name}</Name>
          </Description>
          <Rent>
            <Period>{car?.rent?.period}</Period>
            <Price>{formattedPrice ?  formattedPrice : ''}</Price>
          </Rent>
        </Details>
      </Content>
    </Container>
  )
}