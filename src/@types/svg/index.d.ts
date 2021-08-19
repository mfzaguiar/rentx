declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'reat-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}
