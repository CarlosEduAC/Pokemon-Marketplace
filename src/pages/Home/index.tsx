import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Theme from '../../styles/default';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <h1>Bem vindo a Pokémon Marketplace!!!</h1>
        <p>Escolha qual loja deseja seguir inicialmente.</p>

        <main>
          <figure>
            <Link to="/dark">
              <img
                src="https://pixelmonmod.com/w/images/f/f8/DarkType.png"
                alt="Dark Type"
              />

              <figcaption>Dark Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/fire">
              <img
                src="https://pixelmonmod.com/w/images/7/79/FireType.png"
                alt="Fire Type"
              />

              <figcaption>Fire Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/ice">
              <img
                src="https://pixelmonmod.com/w/images/1/10/IceType.png"
                alt="Ice Type"
              />

              <figcaption>Ice Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/dark">
              <img
                src="https://pixelmonmod.com/w/images/f/f8/DarkType.png"
                alt="Dark Type"
              />

              <figcaption>Dark Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/fire">
              <img
                src="https://pixelmonmod.com/w/images/7/79/FireType.png"
                alt="Fire Type"
              />

              <figcaption>Fire Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/ice">
              <img
                src="https://pixelmonmod.com/w/images/1/10/IceType.png"
                alt="Ice Type"
              />

              <figcaption>Ice Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/dark">
              <img
                src="https://pixelmonmod.com/w/images/f/f8/DarkType.png"
                alt="Dark Type"
              />

              <figcaption>Dark Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/fire">
              <img
                src="https://pixelmonmod.com/w/images/7/79/FireType.png"
                alt="Fire Type"
              />

              <figcaption>Fire Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/ice">
              <img
                src="https://pixelmonmod.com/w/images/1/10/IceType.png"
                alt="Ice Type"
              />

              <figcaption>Ice Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/dark">
              <img
                src="https://pixelmonmod.com/w/images/f/f8/DarkType.png"
                alt="Dark Type"
              />

              <figcaption>Dark Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/fire">
              <img
                src="https://pixelmonmod.com/w/images/7/79/FireType.png"
                alt="Fire Type"
              />

              <figcaption>Fire Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/ice">
              <img
                src="https://pixelmonmod.com/w/images/1/10/IceType.png"
                alt="Ice Type"
              />

              <figcaption>Ice Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/dark">
              <img
                src="https://pixelmonmod.com/w/images/f/f8/DarkType.png"
                alt="Dark Type"
              />

              <figcaption>Dark Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/fire">
              <img
                src="https://pixelmonmod.com/w/images/7/79/FireType.png"
                alt="Fire Type"
              />

              <figcaption>Fire Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/ice">
              <img
                src="https://pixelmonmod.com/w/images/1/10/IceType.png"
                alt="Ice Type"
              />

              <figcaption>Ice Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/dark">
              <img
                src="https://pixelmonmod.com/w/images/f/f8/DarkType.png"
                alt="Dark Type"
              />

              <figcaption>Dark Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/fire">
              <img
                src="https://pixelmonmod.com/w/images/7/79/FireType.png"
                alt="Fire Type"
              />

              <figcaption>Fire Store</figcaption>
            </Link>
          </figure>
          <figure>
            <Link to="/ice">
              <img
                src="https://pixelmonmod.com/w/images/1/10/IceType.png"
                alt="Ice Type"
              />

              <figcaption>Ice Store</figcaption>
            </Link>
          </figure>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
