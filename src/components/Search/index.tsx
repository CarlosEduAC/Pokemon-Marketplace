import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const Search: React.FC<SearchProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    <input type="text" placeholder="Busque aqui seu pokémon" {...rest} />
    {Icon && <Icon size={30} />}
  </Container>
);

export default Search;
