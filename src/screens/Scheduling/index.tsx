import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Calendar } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateWrapper,
  DateValue,
  Content,
  Footer,
} from './styles';

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateWrapper selected={false}>
              <DateValue>18/06/2021</DateValue>
            </DateWrapper>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateWrapper selected={true}>
              <DateValue>18/06/2021</DateValue>
            </DateWrapper>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Continuar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
