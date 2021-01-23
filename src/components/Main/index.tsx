import React, { useState, useEffect } from 'react';

import Cards, { PokeApiResponse } from '../Cards';
import Cart from '../Cart';

import api from '../../services/api';

import { Container } from './styles';

interface MainProps {
  type: string;
  theme: object;
  filter: string;
}

const Main: React.FC<MainProps> = ({ type, theme, filter }) => {
  const [pokemonList, setPokemonList] = useState<PokeApiResponse[]>([]);

  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/type/${type}`);

      setPokemonList(response.data.pokemon);
    }

    ConsumePokeApi();
  }, [type]);

  return (
    <Container>
      <Cards pokemonList={pokemonList} filter={filter} theme={theme} />
      <Cart theme={theme} />
    </Container>
  );
};

export default Main;
