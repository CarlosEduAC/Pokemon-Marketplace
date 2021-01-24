import React, { useState, useEffect } from 'react';

import Cards, { PokeApiResponse } from '../Cards';
import Cart from '../Cart';

import api from '../../services/api';

import { useWindow } from '../../contexts/WindowDimensionContext';

import { Container, ContainerMobile } from './styles';

interface MainProps {
  type: string;
  theme: object;
  filter: string;
}

const Main: React.FC<MainProps> = ({ type, theme, filter }) => {
  const { windowWidth } = useWindow();
  const [pokemonList, setPokemonList] = useState<PokeApiResponse[]>([]);
  const [showCartMobile, setShowCartMobile] = useState<boolean>(false);

  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/type/${type}`);

      setPokemonList(response.data.pokemon);
    }

    ConsumePokeApi();
  }, [type]);

  const handleCart = () => {
    setShowCartMobile(!showCartMobile);
  };

  return (
    <>
      {windowWidth > 780 ? (
        <Container>
          <Cards pokemonList={pokemonList} filter={filter} theme={theme} />
          <Cart theme={theme} />
        </Container>
      ) : (
        <ContainerMobile>
          <button type="button" onClick={() => handleCart()}>
            {showCartMobile ? 'Catálogo' : 'Carrinho'}
          </button>
          <div>
            {showCartMobile ? (
              <Cart theme={theme} />
            ) : (
              <Cards pokemonList={pokemonList} filter={filter} theme={theme} />
            )}
          </div>
        </ContainerMobile>
      )}
    </>
  );
};

export default Main;
