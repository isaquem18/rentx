import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/carDTO';

import {
  Container,
  RentedCarsList,

  Header,
  BackIcon,
  BackButton,
  HeaderTitle,
  HeaderSubtitle,
  Appointments,
  AppointmentsTitle,
  AppointmentsNumber,
  CardFooter,
  Period,
  Dates,
  FirstDate,
  ArrowIcon,
  LastDate
} from './styles';

import { api } from '../../services/api';
import {
  StatusBar,
  Text
} from 'react-native';
import { Car } from '../../components/Car';

interface SchedulesByUserProps {
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
  id: number;
}

export function CompletedAppointments() {
  const [ rentedCarsList, setRentedCarsList ] = useState<SchedulesByUserProps[]>([] as SchedulesByUserProps[]);
  const [ loading, setLoading ] = useState(true);

  const navigation = useNavigation<any>();

  useFocusEffect(useCallback(() => {
    let mounted = true;

    (async () => {
      const response = await api.get(`/schedules_byuser?user_id=13`);

      setRentedCarsList(response.data);
    })()


    return () => {
      mounted = false;
    }
  }, []))

  return (
    <Container>
    <StatusBar translucent backgroundColor="transparent"/>
    <Header>
      <BackButton 
        onPress={() => navigation.navigate('Home')}
      >
        <BackIcon />
      </BackButton>
      <HeaderTitle>Seus agendamentos,{'\n'}estão aqui.</HeaderTitle>
      <HeaderSubtitle>Conforto, segurança e praticidade.</HeaderSubtitle>
    </Header>
    <Appointments>
      <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
      <AppointmentsNumber>{rentedCarsList.length}</AppointmentsNumber>
    </Appointments>
    <RentedCarsList 
      data={rentedCarsList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <>
        <Car data={item.car} />
        <CardFooter>
          <Period>Período</Period>
          <Dates>
            <FirstDate>18/06/2021</FirstDate>
            <ArrowIcon />
            <LastDate>20/06/2021</LastDate>
          </Dates>
        </CardFooter>
        </>
      )}
    />

    </Container>
  )
}