import React from 'react';
import { ImPlus, ImMinus } from 'react-icons/im';

import PokeCoinImg from '../../assets/pokecoin.png';

import { Container } from './styles';

const CartItem: React.FC = () => (
  <Container>
    <img src={PokeCoinImg} alt="PokeCoin" />
    <strong> Nome do poke</strong>

    <div className="cart-item">
      <div className="cart-qtd">
        <span>
          <ImPlus size={12} />
        </span>
        <input value="1" />
        <span>
          <ImMinus size={12} />
        </span>
      </div>

      <figure>
        <img src={PokeCoinImg} alt="PokeCoin" />
        <figcaption>10</figcaption>
      </figure>
    </div>
  </Container>
);

export default CartItem;
