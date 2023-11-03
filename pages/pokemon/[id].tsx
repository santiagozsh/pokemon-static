import pokeApi from "@/api/pokeApi";
import { MainLayout } from "@/components/layouts/main-layout";
import { Pokemon } from "@/interfaces/pokemon-full";
import { Grid } from "@mui/material";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  CardHeader,
} from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout title={pokemon.name}>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 ">
        <Card shadow="sm" key={pokemon.id} className="m-6">
          <CardBody className="p-10">
            <Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "/no-image.png"
              }
              alt={pokemon.name}
              width={200}
              height={1}
            />
          </CardBody>
          <CardFooter className="text-lg justify-between">
            <p className="capitalize">{pokemon.name}</p>
            <b># {pokemon.id}</b>
          </CardFooter>
        </Card>

        <Card shadow="sm" key={pokemon.id} className="m-6 col-span-3">
          <CardHeader className="flex justify-between	">
            <h1 className="capitalize font-extrabold text-4xl">
              {pokemon.name}
            </h1>
            <Button color="primary" radius="full" variant="ghost">
              Guardar en favoritos
            </Button>
          </CardHeader>

          <CardBody>
            <p className="capitalize text-xl mt-5">Sprites: </p>

            <div className="flex row mt-5">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
