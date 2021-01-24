import React from 'react';
import { ImPlus, ImMinus } from 'react-icons/im';

import PokeCoinImg from '../../assets/pokecoin.png';

import { Container } from './styles';

import { useCart, Pokemon } from '../../contexts/cart';

interface CartItemProps {
  pokemon: Pokemon;
}

const CartItem: React.FC<CartItemProps> = ({ pokemon }) => {
  const { increment, decrement } = useCart();

  const onChangePlus = () => {
    increment(pokemon.name);
  };

  const onChangeMinus = () => {
    decrement(pokemon.name);
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
