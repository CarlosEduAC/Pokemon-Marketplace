import React, { createContext, useState, useEffect, useContext } from 'react';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface AuthContextData {
  pokemonListSelected: Pokemon[];
  addToCart(sPokemon: Pokemon): void;
  increment(name: string): void;
  decrement(name: string): void;
  setEmpty(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [pokemonListSelected, setPokemonListSelected] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const items = localStorage.getItem('@Cart:Pokemon');

      if (items) {
        setPokemonListSelected(JSON.parse(items));
      }
    }

    loadStoragedData();
  }, []);

  useEffect(() => {
    localStorage.setItem('@Cart:Pokemon', JSON.stringify(pokemonListSelected));
  }, [pokemonListSelected]);

  const addToCart = (pokemonSelected: Pokemon) => {
    const checkPokemonExists = pokemonListSelected.findIndex(
      (element) => element.name === pokemonSelected.name,
    );

    if (checkPokemonExists === -1) {
      const { id, name, price, image } = pokemonSelected;
      const newPokemon = {
        id,
        name,
        image,
        price,
        quantity: 1,
      };

      setPokemonListSelected([...pokemonListSelected, newPokemon]);
    } else {
      const items = pokemonListSelected.map((element) => {
        if (pokemonSelected.name === element.name) {
          const { id, name, price, quantity, image } = element;
          const newPokemon = {
            id,
            name,
            image,
            price,
            quantity: quantity + 1,
          };
          return newPokemon;
        }
        return element;
      });

      setPokemonListSelected(items);
    }
  };

  const setEmpty = () => {
    localStorage.setItem('@Cart:Pokemon', JSON.stringify([]));

    setPokemonListSelected([]);
  };

  const increment = (name: string) => {
    const items = pokemonListSelected.map((element) => {
      if (name === element.name) {
        const { id, name: elementName, price, quantity, image } = element;
        const newPokemon = {
          id,
          image,
          name: elementName,
          price,
          quantity: quantity + 1,
        };

        return newPokemon;
      }

      return element;
    });

    setPokemonListSelected(items);
  };

  const decrement = (name: string) => {
    const items = pokemonListSelected.map((element) => {
      if (name === element.name) {
        const { name: elementName, price, quantity } = element;

        const newPokemon = {
          name: elementName,
          price,
          quantity: quantity - 1,
        };

        if (newPokemon.quantity > 0) {
          return newPokemon;
        }
      }
    });

    const filtered = items.filter(Boolean);

    setPokemonListSelected(filtered as Pokemon[]);
  };

  return (
    <AuthContext.Provider
      value={{ pokemonListSelected, increment, decrement, addToCart, setEmpty }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
