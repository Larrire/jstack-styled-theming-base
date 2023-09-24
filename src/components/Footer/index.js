import React from 'react';

import { Container } from './styles';
import { ToggleThemeButton } from '../ToggleThemeButton';

export default function Footer() {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      {/* <button type="button">🌞</button> */}
      <ToggleThemeButton/>
    </Container>
  );
}