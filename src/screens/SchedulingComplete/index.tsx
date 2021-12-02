import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  useWindowDimensions
} from 'react-native';

import LogoSVG from '../../assets/logo_background_gray.svg';
import { ConfirmButton } from '../../components/ConfirmButton';
import {
  Container,
  Content,
  Title,
  Message,
  DoneSVG,
  Footer
} from './styles';

export const SchedulingComplete = () => {

  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  function handleGoToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      <Container>
        <LogoSVG width={width} />
        <Content>
          <DoneSVG />
          <Title>Carro alugado!</Title>
          <Message>
            Agora você só precisa ir {'\n'}
            até a concessionária da RENTX {'\n'}
            pegar o seu automóvel.
          </Message>
        </Content>
        <Footer>
          <ConfirmButton title="OK"
            onPress={handleGoToHome}
          />
        </Footer>
      </Container>
    </>
  )
}