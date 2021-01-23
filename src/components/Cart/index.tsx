import React from 'react';
import { ThemeProvider } from 'styled-components';

import PokeCoinImg from '../../assets/pokecoin.png';

import CartItem from '../CartItem';
import { Pokemon } from '../Card';
import { PokemonSelected } from '../Main';

import { Container } from './styles';

interface CartProps {
  theme: object;
  pokemonSelectedList: PokemonSelected[];
  setPokemonSelected(pokemon: Pokemon, minus?: boolean): void;
}

const Cart: React.FC<CartProps> = ({
  theme,
  pokemonSelectedList,
  setPokemonSelected,
}) => (
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
                pokemon={pokemon}
                setPokemonSelected={setPokemonSelected}
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
