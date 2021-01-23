import React, { useState, useEffect } from 'react';

import Cards from '../Cards';
import Cart from '../Cart';

import api from '../../services/api';

import { Container } from './styles';

interface MainProps {
  type: string;
  theme: object;
}

interface Pokemon {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface PokemonProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const Main: React.FC<MainProps> = ({ type, theme }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get(`/type/${type}`).then((response) => {
      const pokemons = response.data.pokemon.map((data: PokemonProps) => {
        const id = parseInt(data.pokemon.url.split('/')[6], 10);

        return {
          id,
          image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
          name: data.pokemon.name,
          price: id,
        };

        setPokemonList(pokemons);
      });

      return pokemons;
    });
  }, [pokemonList, type]);

  return (
    <Container>
      <Cards pokemonList={pokemonList} theme={theme} />
      <Cart theme={theme} />
    </Container>
  );
};

export default Main;
