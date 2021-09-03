import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const route = useRoute();

  const { title, message, nextScreenRoute } = route.params as Params;

  function handleScheduleCompleted() {
    navigation.navigate(nextScreenRoute);
  }

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
        <Title>{title}</Title>

        <Message>{message}</Message>

        <Footer>
          <ConfirmButton title="Ok" onPress={handleScheduleCompleted} />
        </Footer>
      </Content>
    </Container>
  );
}
