import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg height={80} width={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>

        <Footer>
          <ConfirmButton title="Ok" />
        </Footer>
      </Content>
    </Container>
  );
}
