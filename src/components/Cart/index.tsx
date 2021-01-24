import React from 'react';
import Swal from 'sweetalert2';
import { ThemeProvider } from 'styled-components';

import PokeCoinImg from '../../assets/pokecoin.png';

import CartItem from '../CartItem';

import { useCart } from '../../contexts/CartContext';

import { useWindow } from '../../contexts/WindowDimensionContext';

import { Container } from './styles';

interface CartProps {
  theme: object;
}

const Cart: React.FC<CartProps> = ({ theme }) => {
  const { windowHeight } = useWindow();

  const { pokemonListSelected, totalPrice, setEmpty } = useCart();

  const handleSubmit = () => {
    if (totalPrice > 0) {
      Swal.fire(
        'Obrigado!!!',
        `Você ganhou de volta ${Math.floor(totalPrice * 0.05)} Pokémoedas`,
        'success',
      );

      setEmpty();
    }
  };

  return (
    <Container windowDimensions={windowHeight}>
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

        <button type="button" onClick={handleSubmit}>
          Finalizar
        </button>
      </footer>
    </Container>
  );
};

export default Cart;
