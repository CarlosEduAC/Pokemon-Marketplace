import React from 'react';
import { ThemeProvider } from 'styled-components';

import Card from '../Card';

import { Container } from './styles';

interface Pokemon {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface CardProps {
  pokemonList: Pokemon[];
  theme: object;
}

const Cards: React.FC<CardProps> = ({ pokemonList, theme }) => (
  <Container>
    <ThemeProvider theme={theme}>
      {pokemonList.map((pokemon) => (
        <Card
          id={pokemon.id}
          name={pokemon.name}
          price={pokemon.price}
          image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        />
      ))}
    </ThemeProvider>
  </Container>
);

export default Cards;
