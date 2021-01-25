import React from 'react';
import { ThemeProvider } from 'styled-components';

import Card from '../Card';
import CardInfo from '../CardInfo';

import { Container } from './styles';

interface CardProps {
  pokemonList: PokeApiResponse[];
  filter: string;
  showInfo: number;
  theme: object;
  handleShowInfo(id: number): void;
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
  showInfo,
  handleShowInfo,
}) => {
  const backToCatalog = () => {
    handleShowInfo(0);
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        {showInfo === 0 ? (
          pokemonList
            .filter((data) => data.pokemon.name.includes(filter))
            .map((value) => (
              <Card
                key={parseInt(value.pokemon.url.split('/')[6], 10)}
                id={parseInt(value.pokemon.url.split('/')[6], 10)}
                name={value.pokemon.name}
                handleShowInfo={handleShowInfo}
              />
            ))
        ) : (
          <CardInfo id={showInfo} backToCatalog={backToCatalog} />
        )}
      </ThemeProvider>
    </Container>
  );
};
export default Cards;
