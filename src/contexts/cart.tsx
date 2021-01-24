import React, { createContext, useState, useEffect, useContext } from 'react';

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface CartContextData {
  pokemonListSelected: Pokemon[];
  totalPrice: number;
  addToCart(sPokemon: Pokemon): void;
  increment(name: string): void;
  decrement(name: string): void;
  setEmpty(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [pokemonListSelected, setPokemonListSelected] = useState<Pokemon[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const items = localStorage.getItem('@Cart:Pokemon');
      const total = localStorage.getItem('@Cart:TotalPrice')
        ? localStorage.getItem('@Cart:TotalPrice')
        : '0';

      if (items) {
        setPokemonListSelected(JSON.parse(items));
        setTotalPrice(JSON.parse(total as string));
      }
    }

    loadStoragedData();
  }, []);

  useEffect(() => {
    localStorage.setItem('@Cart:Pokemon', JSON.stringify(pokemonListSelected));
    localStorage.setItem('@Cart:TotalPrice', JSON.stringify(totalPrice));
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

      setTotalPrice(totalPrice + parseInt(price, 10));
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

          setTotalPrice(totalPrice + parseInt(price, 10));

          return newPokemon;
        }

        return element;
      });

      setPokemonListSelected(items);
    }
  };

  const setEmpty = () => {
    localStorage.setItem('@Cart:Pokemon', JSON.stringify([]));
    localStorage.setItem('@Cart:TotalPrice', JSON.stringify(0));

    setPokemonListSelected([]);
    setTotalPrice(0);
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

        setTotalPrice(totalPrice + parseInt(price, 10));

        return newPokemon;
      }

      return element;
    });

    setPokemonListSelected(items);
  };

  const decrement = (name: string) => {
    const items = pokemonListSelected.map((pokemon) => {
      if (name === pokemon.name) {
        const { id, image, name: pokemonName, price, quantity } = pokemon;

        const newPokemon = {
          id,
          image,
          name: pokemonName,
          price,
          quantity: quantity - 1,
        };

        setTotalPrice(totalPrice - parseInt(price, 10));

        if (newPokemon.quantity > 0) {
          return newPokemon;
        }

        return;
      }
      return pokemon;
    });

    const filtered = items.filter(Boolean);

    setPokemonListSelected(filtered as Pokemon[]);
  };

  return (
    <CartContext.Provider
      value={{
        pokemonListSelected,
        totalPrice,
        increment,
        decrement,
        addToCart,
        setEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
