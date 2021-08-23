import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Car } from '../../components/Car';

import Logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, TotalCars, CarList } from './styles';

export function Home() {
  const navigation = useNavigation();

  const carOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail:
      'https://www.ccarprice.com/products/Audi_RS5_Coupe_2.9T_Quattro_2021.jpg',
  };

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3]}
        key={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carOne} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
