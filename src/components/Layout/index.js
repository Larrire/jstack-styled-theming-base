import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes';

export default function Layout() {
  return (
    <>
      <Header title="JStack's Blog"/>
      <Routes/>
      <Footer />
    </>
  );
}
