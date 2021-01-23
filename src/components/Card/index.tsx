import React from 'react';
import { ImPlus } from 'react-icons/im';

import PokeCoinImg from '../../assets/pokecoin.png';

import { Container } from './styles';

interface CardProps {
  id: number;
  image: string;
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ id, image, name, price }) => (
  <Container key={id}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <strong>{name}</strong>
        <div>
          <img src={PokeCoinImg} alt={price} />
          <span>{price}</span>
        </div>
        <button type="button">
          <span>Adicionar</span>
          <ImPlus size={18} />
        </button>
      </figcaption>
    </figure>
  </Container>
);

export default Card;
