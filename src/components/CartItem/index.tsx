import React, { useState } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im';

import { PokemonSelected } from '../Main';

import PokeCoinImg from '../../assets/pokecoin.png';

import { Container } from './styles';
import { Pokemon } from '../Card';

interface CartItemProps {
  pokemon: PokemonSelected;
  setPokemonSelected(pokemon: Pokemon, minus?: boolean): void;
}

const CartItem: React.FC<CartItemProps> = ({ pokemon, setPokemonSelected }) => {
  const onChangePlus = () => {
    setPokemonSelected(pokemon);
  };

  const onChangeMinus = () => {
    setPokemonSelected(pokemon, true);
  };

  return (
    <Container key={pokemon.id}>
      <img src={pokemon.image} alt="PokeCoin" />
      <strong>{pokemon.name}</strong>

      <div className="cart-item">
        <div className="cart-qtd">
          <button type="button" onClick={onChangePlus}>
            <ImPlus size={12} />
          </button>
          <span>{pokemon.quantity}</span>
          <button type="button" onClick={onChangeMinus}>
            <ImMinus size={12} />
          </button>
        </div>

        <figure>
          <img src={PokeCoinImg} alt="PokeCoin" />
          <figcaption>{pokemon.price}</figcaption>
        </figure>
      </div>
    </Container>
  );
};

export default CartItem;
