import { createFileRoute, useLoaderData} from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/$name')({
  //loader function
  loader: async({params}) => {
    const {name} = params
    console.log(params)

    if(!name) {
        throw new Error('Could not fetch pokemon')
    }

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)

    if (!res.ok){
        throw new Error('Failed to fetch Pokemon data')
    }

    const data = await res.json()
  
    return {
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(t => t.type.name).join(', ')
    }
  },  
  component: PokemonName,
})

function PokemonName() {
    const pokemon = Route.useLoaderData()
  return <div>
    <p>{pokemon.name}</p>
    <img src={pokemon.sprite} alt={pokemon.name} />
    <p>{pokemon.types}</p>
  </div>
}
