import React, { useState, useEffect } from 'react';
import { ImPlus, ImArrowLeft } from 'react-icons/im';

import PokeCoinImg from '../../assets/pokecoin.png';

import api from '../../services/api';
import { useCart, Pokemon } from '../../contexts/CartContext';

import { Container } from './styles';

interface CardInfoProps {
  id: number;
  backToCatalog(): void;
}

interface PokemonApi {
  id: number;
  image: string;
  name: string;
  price: string;
  types: string[];
  moves: string[];
  // weakness: string[];
  // strongness: string[];
}

interface TypesProps {
  type: {
    name: string;
  };
  move: {
    name: string;
  };
}

const CardInfo: React.FC<CardInfoProps> = ({ id, backToCatalog }) => {
  const { addToCart } = useCart();
  const [pokemonApi, setPokemonApi] = useState<PokemonApi>();
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

      const types: string[] = response.data.types.map((data: TypesProps) => {
        return data.type.name;
      });

      const moves: string[] = response.data.moves.map((data: TypesProps) => {
        return data.move.name;
      });

      setPokemonApi({
        id,
        image,
        name: response.data.name,
        price: response.data.base_experience,
        types,
        moves,
      });

      setPokemon({
        id,
        image,
        name: response.data.name,
        price: response.data.base_experience,
        quantity: 0,
      });
    }

    getPokemonInfo();
  }, []);

  return (
    <Container key={id}>
      <div className="poke-back">
        <button
          className="back-catalog"
          type="button"
          onClick={() => backToCatalog()}
        >
          <ImArrowLeft size={32} />
          Catálogo
        </button>
      </div>

      <img src={pokemon?.image} alt={pokemon?.name} />
      <h1>{pokemon?.name}</h1>

      <div className="poke-price">
        <img src={PokeCoinImg} alt={pokemon?.price} />
        <span>{pokemon?.price}</span>
      </div>

      <button type="button" onClick={() => addToCart(pokemon as Pokemon)}>
        <span>Adicionar</span>
        <ImPlus size={18} />
      </button>

      <div className="block">
        <p>Tipos</p>
        <div>
          {pokemonApi?.types.map((type) => {
            return <span className="item">{type}</span>;
          })}
        </div>
      </div>

      <div className="block">
        <p className="p-name">Movimentos</p>
        <div className="moves">
          {pokemonApi?.moves.map((move) => {
            return <span className="item">{move}</span>;
          })}
        </div>
      </div>
    </Container>
  );
};

export default CardInfo;
