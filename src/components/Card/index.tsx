import React, { useState, useEffect } from 'react';
import { ImPlus } from 'react-icons/im';

import PokeCoinImg from '../../assets/pokecoin.png';

import api from '../../services/api';

import { Container } from './styles';

export interface Pokemon {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface CardProps {
  id: number;
  name: string;
  setPokemonSelected(pokemon: Pokemon): void;
}

const Card: React.FC<CardProps> = ({ id, name, setPokemonSelected }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function getPokemonInfo() {
      const response = await api.get(`pokemon/${id}`);
      const image =
        id === 10175
          ? 'https://i.pinimg.com/originals/ab/19/05/ab190523218228e251a54fe514e1dff6.png'
          : id === 10179
          ? 'https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/swsh/240/eiscue-noice.png'
          : id === 10116
          ? 'https://static.pokemonpets.com/images/monsters-images-800-800/2658-Shiny-Greninja.png'
          : id === 10117
          ? 'https://images.uncyc.org/pt/0/0e/658Greninja-Ash.png'
          : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      setPokemon({
        id,
        image,
        name,
        price: response.data.base_experience,
      });
    }

    getPokemonInfo();
  }, []);

  return (
    <Container key={id}>
      <figure>
        <img src={pokemon?.image} alt={pokemon?.name} />
        <figcaption>
          <strong>{pokemon?.name}</strong>
          <div>
            <img src={PokeCoinImg} alt={pokemon?.price} />
            <span>{pokemon?.price}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setPokemonSelected(pokemon as Pokemon);
            }}
          >
            <span>Adicionar</span>
            <ImPlus size={18} />
          </button>
        </figcaption>
      </figure>
    </Container>
  );
};

export default Card;
