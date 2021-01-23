import React from 'react';
import { ThemeProvider } from 'styled-components';

import Card, { Pokemon } from '../Card';

import { Container } from './styles';

interface CardProps {
  pokemonList: PokeApiResponse[];
  setPokemonSelected(pokemon: Pokemon): void;
  filter: string;
  theme: object;
}

export interface PokeApiResponse {
  pokemon: {
    name: string;
    url: string;
  };
}

const Cards: React.FC<CardProps> = ({
  pokemonList,
  theme,
  filter,
  setPokemonSelected,
}) => (
  <Container>
    <ThemeProvider theme={theme}>
      {pokemonList
        .filter((data) => data.pokemon.name.includes(filter))
        .map((value) => (
          <Card
            key={parseInt(value.pokemon.url.split('/')[6], 10)}
            id={parseInt(value.pokemon.url.split('/')[6], 10)}
            name={value.pokemon.name}
            setPokemonSelected={setPokemonSelected}
          />
        ))}
    </ThemeProvider>
  </Container>
);

export default Cards;
