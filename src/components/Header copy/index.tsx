import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch, ImArrowLeft } from 'react-icons/im';

import Search from '../Search';

import { Container } from './styles';

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
  LogoImg: string;
  type: string;
}

const Header: React.FC<HeaderProps> = ({ LogoImg, type, ...rest }) => (
  <Container>
    <figure>
      <img src={LogoImg} alt="Pokémon Marketplace" />
      <Link to="/">
        <figcaption>{type} Store</figcaption>
      </Link>
    </figure>
    <Search icon={ImSearch} {...rest} />
    <Link to="/">
      <ImArrowLeft size={32} />
      Voltar
    </Link>
  </Container>
);

export default Header;
