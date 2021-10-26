import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';

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

import { Calendar } from '../../components/Calendar';

export const Scheduling = () => {

  const theme = useTheme();

  return (
    <>
      <StatusBar />
      <Container>
        <Header>
          <BackButtonBox>
            <BackButton 
              color={theme.colors.light} 
              onPress={() => console.log('hehehe')}
            />
          </BackButtonBox>
          <Title>Escolha uma data de início e fim do aluguel</Title>

          <RentalPeriod>
            <DateInfo selected={true}>
              <DateTitle>DE</DateTitle>
              <DateValue>25/10/2021</DateValue>
            </DateInfo>
            <ArrowBox>
              <ArrowSvg />
            </ArrowBox>
            <DateInfo selected={false}>
              <DateTitle>ATÉ</DateTitle>
              <DateValue></DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>
        <Content>
          <Calendar />
          <Footer>
            <FooterButton 
              title="Confirmar"
              onPress={() => {}}
            />
          </Footer>
        </Content>
      </Container>
    </>
  )
}