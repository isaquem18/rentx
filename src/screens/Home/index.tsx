import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { 
  ActivityIndicator,
  Alert,
  FlatList,
  StatusBar,
  Dimensions,
  View
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { Car } from '../../components/Car';
import { 
  Container,
  Header,
  LogoHeader,
  TotalCars,
  HeaderContent,
  CarList,
  ErrorText,
  ErrorTextBox,
  ErrorIcon
} from './styles';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/carDTO';
import { useTheme } from 'styled-components';
import { useCar } from '../../context/SelectedCar';
import { FloatButton } from '../../components/FloatButton';
import { Splash } from '../Splash';

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
  const [ carsList, setCarsList ] = useState<CarDTO[]>([] as CarDTO[]);
  const [ loading , setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const { car, setCar } = useCar();

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const opacitySplash = useSharedValue(1);

  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleCarDetails(item: CarDTO) {
    setCar(item);
    navigation.navigate('CarDetails', {
      car: item
    })
  };

  useEffect(() => {
    opacitySplash.value = withTiming(0, { duration: 5000 });
  }, [])

  useFocusEffect(useCallback(() => {
    let mounted = true;

    (async () => {
      try {
        const getCarsList = await api.get('/cars');
        if (mounted) {
          setCarsList(getCarsList.data);
          setError(false);
        }
      } catch (e) {
        if (mounted) {
          setError(true)
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    })()

    return () => {
      mounted = false;
    }
  }, []))

  function handleCompletedAppointments() {
    navigation.navigate('CompletedAppointments')
  }

  if (loading) {
    <ActivityIndicator 
      color={theme.colors.main}
      size="small"
    />
  }

  return (
    <>
      <Container>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <HeaderContent>
            <LogoHeader />
            <TotalCars>Total de {carsList.length} carros</TotalCars>
          </HeaderContent>
        </Header>
        <CarList 
          data={carsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <Car data={item} onPress={() => handleCarDetails(item)}/>
          )}
        />
        {error && (
          <ErrorTextBox>
            <ErrorIcon name="alert-circle" />
            <ErrorText>Não foi possível carregar a lista</ErrorText>
          </ErrorTextBox>
        )}

        <FloatButton
          onPress={handleCompletedAppointments}
        />
      </Container>
    </>
  )
}
