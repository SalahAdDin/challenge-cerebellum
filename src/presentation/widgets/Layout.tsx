import { Card } from '@nextui-org/react';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';

interface ExtendedLocationState {
  title: string;
}

const Layout: React.FC = () => {
  const { state } = useLocation();
  const { title } = (state ?? {
    title: 'Home Renovation',
  }) as ExtendedLocationState;

  return (
    <Card as="article" css={{ minHeight: '95vh' }}>
      <Card.Header as="header" css={{ justifyContent: 'center' }}>
        <Header title={title} />
      </Card.Header>
      <Outlet />
    </Card>
  );
};

export default Layout;
