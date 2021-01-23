import api from './api';

interface Request {
  type: string;
}

interface Pokemon {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface PokeApiResponse extends Pokemon {
  url: string;
}

const consumePokeApiService = async ({ type }: Request): Promise<Pokemon[]> => {
  const response = await api.get(`/type/${type}`);

  const list = response.data;

  const pokemons = list.pokemons.map((pokemon: PokeApiResponse) => {
    const id = parseInt(pokemon.url.split('/')[6], 10);

    return {
      id,
      image: 'https://pokeres.bastionbot.org/images/pokemon/',
      name: pokemon.name,
      price: id,
    };
  });

  return pokemons;
};

export default consumePokeApiService;
