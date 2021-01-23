import React from 'react';
import { ThemeProvider } from 'styled-components';

import PokeCoinImg from '../../assets/pokecoin.png';

import CartItem from '../CartItem';
import { PokemonSelected } from '../Main';

import { Container } from './styles';

interface CartProps {
  theme: object;
  pokemonSelectedList: PokemonSelected[];
}

const Cart: React.FC<CartProps> = ({ theme, pokemonSelectedList }) => (
  <Container>
    <header>
      <h1>Carrinho</h1>
    </header>
    <ul>
      <ThemeProvider theme={theme}>
        {pokemonSelectedList &&
          pokemonSelectedList.map((pokemon) => {
            return (
              <CartItem
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                price={pokemon.price}
                quantity={pokemon.quantity}
              />
            );
          })}
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

      <button type="submit">Finalizar</button>
    </footer>
  </Container>
);

export default Cart;
