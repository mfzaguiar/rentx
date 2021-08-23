import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import acelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from './styles';

export function CarDetails() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://www.ccarprice.com/products/Audi_RS5_Coupe_2.9T_Quattro_2021.jpg',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory icon={speedSvg} name="380Km/h" />
          <Acessory icon={acelerationSvg} name="3.2s" />
          <Acessory icon={forceSvg} name="800 HP" />
          <Acessory icon={gasolineSvg} name="Gasolina" />
          <Acessory icon={exchangeSvg} name="Auto" />
          <Acessory icon={peopleSvg} name="2 pessoas" />
        </Acessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deserunt reprehenderit doloremque ipsam nisi vitae libero. Corporis
          mollitia totam optio autem, sed odio quasi illo alias ipsa minus
          obcaecati minima?
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
