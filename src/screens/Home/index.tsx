import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { LoadAnimation } from '../../components/LoadAnimation';
import { Car } from '../../components/Car';
import Logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, TotalCars, CarList } from './styles';

import { CarDTO } from '../../dtos/carDTO';
import api from '../../services/api';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {
      car,
    });
  }

  useEffect(() => {
    let isMounted = true;

    async function handleGetInitialData() {
      try {
        const response = await api.get('/cars');

        if (isMounted) {
          setCars(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    handleGetInitialData();
    return () => {
      isMounted = false;
    };
  }, []);

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
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>
      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
