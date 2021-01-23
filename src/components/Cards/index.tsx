import React from 'react';
import { ThemeProvider } from 'styled-components';

import Card from '../Card';

import { Container } from './styles';

interface CardProps {
  pokemonList: PokeApiResponse[];
  filter: string;
  theme: object;
}

export interface PokeApiResponse {
  pokemon: {
    name: string;
    url: string;
  };
}

const Cards: React.FC<CardProps> = ({ pokemonList, theme, filter }) => (
  <Container>
    <ThemeProvider theme={theme}>
      {pokemonList
        .filter((data) => data.pokemon.name.includes(filter))
        .map((value) => (
          <Card
            id={parseInt(value.pokemon.url.split('/')[6], 10)}
            name={value.pokemon.name}
          />
        ))}
    </ThemeProvider>
  </Container>
);

export default Cards;
