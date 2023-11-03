import pokeApi from "@/api/pokeApi";
import { MainLayout } from "@/components/layouts/main-layout";
import { PokemonListResponse, SmallPokemon } from "@/interfaces/pokemon-list";
import { GetStaticProps, NextPage } from "next";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

export const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Listado de pokemons">
        <div className="container mx-auto grid grid-cols-4 gap-4 py-6 ">
          {pokemons.map(( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon} />
            //   <Card shadow="sm" key={id } isPressable onPress={() => console.log("item pressed")}>
            //   <CardBody className="p-10">
            //     <Image
            //       width="100%"
            //       src={img}
            //     />
            //   </CardBody>
            //   <CardFooter className="text-lg justify-between">
            //     <p className="capitalize">{name}</p>
            //     <b># {id }</b>
            //   </CardFooter>
            // </Card>
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
