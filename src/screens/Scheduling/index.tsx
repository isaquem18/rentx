import React, { useState } from 'react';
import { 
  StatusBar,
  Alert
} from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { useCar } from '../../context/SelectedCar';

import {
  Container, 
  Header, 
  Title,
  BackButtonBox,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
  ArrowBox
} from './styles';
import { FooterButton } from '../../components/FooterButton';

import { 
  MarkedDatesProps,
  DayProps,
  Calendar,
  generateInterval,

} from '../../components/Calendar';
import { format } from 'date-fns';

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

export const Scheduling = () => {
  const [ lastSelectedDate, setLastSelectedDate ] = useState<DayProps>({} as DayProps);
  const [ markdedDates, setMarketDates ] = useState<MarkedDatesProps>({} as MarkedDatesProps);
  const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod);
  const { car, setCar } = useCar();

  const theme = useTheme();
  const navigation = useNavigation<any>();

  const handleConfirmScheduling = () => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.end) {
      Alert.alert('Selecione o intervalo para alugar')
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markdedDates)
      })
    }
  }

  function handleChangeDate(date: DayProps ) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarketDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd-MM-yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd-MM-yyyy'),
    })
  }

  return (
    <>
      <StatusBar />
      <Container>
        <Header>
          <BackButtonBox>
            <BackButton 
              color={theme.colors.light} 
              onPress={() => navigation.goBack()}
            />
          </BackButtonBox>
          <Title>Escolha uma data de início e fim do aluguel</Title>

          <RentalPeriod>
            <DateInfo selected={!!rentalPeriod.startFormatted}>
              <DateTitle>DE</DateTitle>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateInfo>
            <ArrowBox>
              <ArrowSvg />
            </ArrowBox>
            <DateInfo selected={!!rentalPeriod.endFormatted}>
              <DateTitle>ATÉ</DateTitle>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>
        <Content>
          <Calendar 
            markedDates={markdedDates}
            onDayPress={handleChangeDate}
          />
          <Footer>
            <FooterButton 
              title="Confirmar"
              onPress={handleConfirmScheduling}
              enabled={!!rentalPeriod.end}
              light={!rentalPeriod.end}
            />
          </Footer>
        </Content>
      </Container>
    </>
  )
}