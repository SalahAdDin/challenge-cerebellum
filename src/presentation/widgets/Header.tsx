import { Text } from '@nextui-org/react';
import React from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => (
  <Text h1 css={{ textAlign: 'center' }}>
    {title}
  </Text>
);

export default Header;
