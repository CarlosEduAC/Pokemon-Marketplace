import React, { useState, useEffect } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im';

import { PokemonSelected } from '../Main';

import PokeCoinImg from '../../assets/pokecoin.png';

import { Container } from './styles';

const CartItem: React.FC<PokemonSelected> = ({
  id,
  name,
  price,
  image,
  quantity,
}) => {
  const [amount, setAmount] = useState<number>(quantity);

  const onChangePlus = () => {
    console.log('Plus', amount);
    setAmount(amount + 1);
  };

  const onChangeMinus = () => {
    console.log('Minus', amount);
    setAmount(amount - 1);
  };

  return (
    <Container key={id}>
      <img src={image} alt="PokeCoin" />
      <strong>{name}</strong>

      <div className="cart-item">
        <div className="cart-qtd">
          <button type="button" onClick={onChangePlus}>
            <ImPlus size={12} />
          </button>
          <input value={amount} onChange={() => setAmount(quantity)} />
          <button type="button" onClick={onChangeMinus}>
            <ImMinus size={12} />
          </button>
        </div>

        <figure>
          <img src={PokeCoinImg} alt="PokeCoin" />
          <figcaption>{price}</figcaption>
        </figure>
      </div>
    </Container>
  );
};

export default CartItem;
