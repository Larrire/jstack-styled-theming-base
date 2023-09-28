import React from 'react';

import { Container } from './styles';
import { ToggleThemeButton } from '../ToggleThemeButton';

export default class Header extends React.Component {
  render() {
    const { title = "JStack's Blog" } = this.props

    return (
      <Container>
        <h1>{title}</h1>
        <ToggleThemeButton/>
      </Container>
    )
  }
}