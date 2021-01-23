import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from '../../styles/default';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ThemeProvider theme={Theme} />
    </Container>
  );
};

export default Home;
