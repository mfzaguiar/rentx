import React from 'react';
import { useTheme } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

import { Container, Title } from './styles';

interface Props {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  onPress,
}: Props) {
  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: !enabled || loading ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
