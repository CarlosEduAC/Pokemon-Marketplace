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
  const { windowWidth } = useWindow();

  return (
    <Container>
      <figure>
        <Link to={`/${type}`}>
          <img src={LogoImg} alt="Pokémon Marketplace" />
          {windowWidth > 780 && <figcaption>{type} Store</figcaption>}
        </Link>
      </figure>
      <Search icon={ImSearch} {...rest} />
      <Link to="/">
        <ImArrowLeft size={32} />
        {windowWidth > 780 && 'Voltar'}
      </Link>
    </Container>
  );
};

export default Header;
