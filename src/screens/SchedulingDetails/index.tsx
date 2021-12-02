import React, { useCallback, useState } from 'react';
import { format } from 'date-fns';
import { 
  useNavigation,
  useRoute,
  useFocusEffect
} from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  StatusBar
} from 'react-native';

import { ImageSlider } from '../../components/ImageSlider';
import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import uuid from 'react-native-uuid';

import {
  Container,
  Header,
  CarImages,
  Acessories,
  RentalPeriod,
  CalendarIconBox,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import { Acessory } from '../../components/Acessory';
import { FooterButton } from '../../components/FooterButton';
import theme from '../../styles/theme';
import { useCar } from '../../context/SelectedCar';
import {
  MarkedDatesProps
} from '../../components/Calendar';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';


interface Props {
  first: string;
  last: string;
}

interface Dates {
  dates: string[];
}

export const SchedulingDetails = () => {
  const { car } = useCar()
  const [ loading, setLoading ] = useState(false); 
  const [ firstAndLastDates, setFirstAndLastDates] = useState<Props>({
    first: '',
    last: ''
  });
  const navigation = useNavigation<any>();

  const { dates } = useRoute().params as Dates;
  
  useFocusEffect(useCallback(() => {
    let mounted = true;

    console.log(dates)

    if (mounted) {
      setFirstAndLastDates({
        first: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
        last: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
      }) 
    }

    return () => {
      mounted = false;
    }
  }, []));

  const handleSchedulingComplete = async () => {
    setLoading(true);
    
    const SchedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailableDates = [
      ...SchedulesByCar.data.unavailable_dates,
      ...dates
    ];

    api.post(`/schedules_byuser`, {
      user_id: 13,
      car,
      startDate: firstAndLastDates.first,
      endDate: firstAndLastDates.last
    })

    await api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates: unavailableDates
    })
      .then((response) => {
        navigation.navigate('SchedulingComplete');
      })
      .catch(() => {
        setLoading(false);
        Alert.alert('Não foi possível confirmar o agendamento.')
      })

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
        <RentalPeriod>
          <CalendarIconBox>
            <CalendarIcon name="calendar" />
          </CalendarIconBox>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{firstAndLastDates.first}</DateValue>
          </DateInfo>
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{firstAndLastDates.last}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ {car.rent.price}  x{dates.length} diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ {car.rent.price * dates.length}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Container>
        <Footer>
          <FooterButton 
            title={loading ? <ActivityIndicator color={theme.colors.main} style={{ opacity: 1 }} /> : "Alugar agora"}
            color={theme.colors.success}
            onPress={handleSchedulingComplete}
            enabled={!loading}
            loading={loading}
            light={loading}
          />
        </Footer>
    </>
  )
}