import React, { useState, useEffect } from 'react';
import { ImPlus } from 'react-icons/im';

import PokeCoinImg from '../../assets/pokecoin.png';

import api from '../../services/api';

import { Container } from './styles';

interface Pokemon {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface CardProps {
  id: number;
  name: string;
}

const Card: React.FC<CardProps> = ({ id, name }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function getPokemonInfo() {
      const response = await api.get(`pokemon/${id}`);

      setPokemon({
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        name,
        price: response.data.base_experience,
      });
    }

    getPokemonInfo();
  }, [pokemon]);

  return (
    <Container key={pokemon?.id}>
      <figure>
        <img src={pokemon?.image} alt={pokemon?.name} />
        <figcaption>
          <strong>{pokemon?.name}</strong>
          <div>
            <img src={PokeCoinImg} alt={pokemon?.price} />
            <span>{pokemon?.price}</span>
          </div>
          <button type="button">
            <span>Adicionar</span>
            <ImPlus size={18} />
          </button>
        </figcaption>
      </figure>
    </Container>
  );
};

export default Card;
