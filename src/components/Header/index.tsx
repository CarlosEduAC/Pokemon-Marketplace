import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch, ImArrowLeft } from 'react-icons/im';

import Search from '../Search';

import { Container } from './styles';

import { useWindow } from '../../contexts/WindowDimensionContext';

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
  LogoImg: string;
  type: string;
}

const Header: React.FC<HeaderProps> = ({ LogoImg, type, ...rest }) => {
  const { windowDimensions } = useWindow();

  return (
    <Container>
      <figure>
        <img src={LogoImg} alt="Pokémon Marketplace" />

        <Link to="/">
          {windowDimensions > 780 && <figcaption>{type} Store</figcaption>}
        </Link>
      </figure>
      <Search icon={ImSearch} {...rest} />
      <Link to="/">
        <ImArrowLeft size={32} />
        {windowDimensions > 780 && 'Voltar'}
      </Link>
    </Container>
  );
};

export default Header;
