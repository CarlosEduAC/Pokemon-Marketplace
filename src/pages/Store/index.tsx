import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from '../../components/Header';
import Main from '../../components/Main';

import LogoImg from '../../assets/logo.png';
import DarkTheme from '../../styles/dark';
import FireTheme from '../../styles/fire';
import IceTheme from '../../styles/ice';
import WaterTheme from '../../styles/water';
import GrassTheme from '../../styles/grass';
import ElectricTheme from '../../styles/electric';
import DragonTheme from '../../styles/dragon';
import FairyTheme from '../../styles/fairy';
import GroundTheme from '../../styles/ground';
import PoisonTheme from '../../styles/poison';

import { Container } from './styles';

interface ParamsProps {
  type: string;
}

const Store: React.FC = () => {
  const { type } = useParams<ParamsProps>();

  const [pokemonName, setPokemonName] = useState<string>('');

  return (
    <ThemeProvider
      theme={
        type === 'dark'
          ? DarkTheme
          : type === 'fire'
          ? FireTheme
          : type === 'ice'
          ? IceTheme
          : type === 'water'
          ? WaterTheme
          : type === 'electric'
          ? ElectricTheme
          : type === 'dragon'
          ? DragonTheme
          : type === 'fairy'
          ? FairyTheme
          : type === 'ground'
          ? GroundTheme
          : type === 'poison'
          ? PoisonTheme
          : GrassTheme
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
            type === 'dark'
              ? DarkTheme
              : type === 'fire'
              ? FireTheme
              : type === 'ice'
              ? IceTheme
              : type === 'water'
              ? WaterTheme
              : type === 'electric'
              ? ElectricTheme
              : type === 'dragon'
              ? DragonTheme
              : type === 'fairy'
              ? FairyTheme
              : type === 'ground'
              ? GroundTheme
              : type === 'poison'
              ? PoisonTheme
              : GrassTheme
          }
        />
      </Container>
    </ThemeProvider>
  );
};

export default Store;
