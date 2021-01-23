import React from 'react';
import { ThemeProvider } from 'styled-components';

import PokeCoinImg from '../../assets/pokecoin.png';

import CartItem from '../CartItem';

import { Container } from './styles';

interface CartProps {
  theme: object;
}

const Cart: React.FC<CartProps> = ({ theme }) => (
  <Container>
    <header>
      <h1>Carrinho</h1>
    </header>
    <ul>
      <ThemeProvider theme={theme}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ThemeProvider>
    </ul>
    <footer>
      <div>
        <strong>Total: </strong>
        <figure>
          <img src={PokeCoinImg} alt="PokeCoin" />
          <figcaption>152</figcaption>
        </figure>
      </div>

      <button type="button">Finalizar</button>
    </footer>
  </Container>
);

export default Cart;
