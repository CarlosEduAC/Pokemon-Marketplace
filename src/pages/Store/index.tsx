import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from '../../components/Header';
import Main from '../../components/Main';

import LogoImg from '../../assets/logo.png';
import DarkTheme from '../../styles/dark';
import FireTheme from '../../styles/fire';
import IceTheme from '../../styles/ice';

import { Container } from './styles';

interface ParamsProps {
  type: 'dark' | 'fire' | 'ice';
}

const Store: React.FC = () => {
  const { type } = useParams<ParamsProps>();

  const [pokemonName, setPokemonName] = useState<string>('');

  return (
    <ThemeProvider
      theme={
        type === 'dark' ? DarkTheme : type === 'fire' ? FireTheme : IceTheme
      }
    >
      <Container>
        <Header
          LogoImg={LogoImg}
          type={type}
          name="search"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />

        <Main
          filter={pokemonName}
          type={type}
          theme={
            type === 'dark' ? DarkTheme : type === 'fire' ? FireTheme : IceTheme
          }
        />
      </Container>
    </ThemeProvider>
  );
};

export default Store;
