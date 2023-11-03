import { SmallPokemon } from "@/interfaces/pokemon-list";
import { FC, use } from "react";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { useRouter } from "next/router";


interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }
  return (
    <Card
      shadow="sm"
      key={pokemon.id}
      isPressable
      onPress={() => console.log("item pressed")}
      onClick={ onPokemonClick }
    >
      <CardBody className="p-10">
        <Image width="100%" src={pokemon.img} />
      </CardBody>
      <CardFooter className="text-lg justify-between">
        <p className="capitalize">{pokemon.name}</p>
        <b># {pokemon.id}</b>
      </CardFooter>
    </Card>
  );
};
