import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

import { Container, Header, Title, SubTitle, Form, Footer } from './styles';

import { Input } from '../../components/Input';

export function SignIn() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="tranparent"
        translucent
      />
      <Header>
        <Title>Estamos{'\n'}quse lá.</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input iconName="lock" />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />

        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          onPress={() => {}}
          enabled={false}
          loading={false}
          light
        />
      </Footer>
    </Container>
  );
}
