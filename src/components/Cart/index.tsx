import React from 'react';
import { ThemeProvider } from 'styled-components';

import PokeCoinImg from '../../assets/pokecoin.png';

import CartItem from '../CartItem';

import { useCart } from '../../contexts/cart';

import { Container } from './styles';

interface CartProps {
  theme: object;
}

const Cart: React.FC<CartProps> = ({ theme }) => {
  const { pokemonListSelected, totalPrice } = useCart();

  return (
    <Container>
      <header>
        <h1>Carrinho</h1>
      </header>
      <ul>
        <ThemeProvider theme={theme}>
          {pokemonListSelected &&
            pokemonListSelected.map((pokemon) => {
              return <CartItem pokemon={pokemon} />;
            })}
        </ThemeProvider>
      </ul>
      <footer>
        <div>
          <strong>Total: </strong>
          <figure>
            <img src={PokeCoinImg} alt="PokeCoin" />
            <figcaption>{totalPrice}</figcaption>
          </figure>
        </div>

        <button type="submit">Finalizar</button>
      </footer>
    </Container>
  );
};

export default Cart;
