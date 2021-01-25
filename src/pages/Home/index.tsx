import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Theme from '../../styles/default';

import { Container } from './styles';

interface TypeProps {
  image: string;
  type: string;
}

const TypeComponent: React.FC<TypeProps> = ({ image, type }) => (
  <figure>
    <Link to={`/${type}`}>
      <img src={image} alt={`${type} Type`} />

      <figcaption>{`${type} Type`}</figcaption>
    </Link>
  </figure>
);

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <h1>Bem vindo a Pokémon Marketplace!!!</h1>
        <p>Escolha qual loja deseja seguir inicialmente.</p>

        <main>
          <TypeComponent
            image="https://pixelmonmod.com/w/images/d/d6/GrassType.png"
            type="grass"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/a/a7/WaterType.png"
            type="water"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/7/79/FireType.png"
            type="fire"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/f/f3/ElectricType.png"
            type="electric"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/f/f8/DarkType.png"
            type="dark"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/1/10/IceType.png"
            type="ice"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/4/47/FairyType.png"
            type="fairy"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/5/5d/DragonType.png"
            type="dragon"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/3/31/GroundType.png"
            type="ground"
          />
          <TypeComponent
            image="https://pixelmonmod.com/w/images/3/3b/PoisonType.png"
            type="poison"
          />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
