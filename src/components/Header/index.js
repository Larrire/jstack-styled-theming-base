import React from 'react';

import { Container } from './styles';
import { ToggleThemeButton } from '../ToggleThemeButton';

export default function Header() {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      {/* <button type="button">🌞</button> */}
      <ToggleThemeButton/>
    </Container>
  );
}