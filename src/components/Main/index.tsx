import React, { useState, useEffect } from 'react';

import Cards, { PokeApiResponse } from '../Cards';
import Cart from '../Cart';
import { Pokemon } from '../Card';

import api from '../../services/api';

import { Container } from './styles';

interface MainProps {
  type: string;
  theme: object;
  filter: string;
}

export interface PokemonSelected extends Pokemon {
  quantity: number;
}

const Main: React.FC<MainProps> = ({ type, theme, filter }) => {
  const [pokemonList, setPokemonList] = useState<PokeApiResponse[]>([]);
  const [pokemonSelectedList, setPokemonSelectedList] = useState<
    PokemonSelected[]
  >([]);

  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/type/${type}`);

      setPokemonList(response.data.pokemon);
    }

    ConsumePokeApi();
  }, [type]);

  const setPokemonSelected = (pokemon: Pokemon, minus?: boolean): void => {
    const checkPokemonExists = pokemonSelectedList.findIndex(
      (pokemonSelected) => pokemonSelected.name === pokemon.name,
    );

    if (minus) {
      const auxPokemonSelectedList = pokemonSelectedList;

      if (auxPokemonSelectedList[checkPokemonExists].quantity > 0) {
        auxPokemonSelectedList[checkPokemonExists].quantity -= 1;

        setPokemonSelectedList(auxPokemonSelectedList);
      } else {
        auxPokemonSelectedList.splice(checkPokemonExists, 1);

        setPokemonSelectedList(auxPokemonSelectedList);
      }
    } else if (checkPokemonExists < 0) {
      setPokemonSelectedList([
        ...pokemonSelectedList,
        { ...pokemon, quantity: 1 },
      ]);
    } else {
      const auxPokemonSelectedList = pokemonSelectedList;

      auxPokemonSelectedList[checkPokemonExists].quantity += 1;

      setPokemonSelectedList(auxPokemonSelectedList);
    }

    console.log(pokemonSelectedList);
  };

  return (
    <Container>
      <Cards
        pokemonList={pokemonList}
        filter={filter}
        theme={theme}
        setPokemonSelected={setPokemonSelected}
      />
      <Cart
        theme={theme}
        pokemonSelectedList={pokemonSelectedList}
        setPokemonSelected={setPokemonSelected}
      />
    </Container>
  );
};

export default Main;
