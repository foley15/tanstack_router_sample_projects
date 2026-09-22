import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/$name')({
  // Loader function
  loader: async ({ params }) => {
    const { name } = params

    if (!name) {
      throw new Error('Could not fetch pokemon')
    }

    // Temporary artificial delay to test the pending state (remove or comment out later)
    await new Promise((resolve) => setTimeout(resolve, 500))

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)

    // Handle 404 cleanly using TanStack Router's notFound()
    if (res.status === 404) {
      throw notFound()
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokemon data (Status: ${res.status})`)
    }

    const data = await res.json()
  
    return {
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map(t => t.type.name).join(', ')
    }
  }, 

  // State Machine Components & Settings
  pendingComponent: () => (
    <div style={{ padding: '20px', fontStyle: 'italic' }}>
      ⏳ Loading Pokémon details...
    </div>
  ),
  pendingMs: 300, // Waits 300ms before showing the spinner to prevent flashes on fast connections

  errorComponent: ({ error }) => (
    <div style={{ padding: '20px', color: 'red' }}>
      <h3>⚠️ Something went wrong</h3>
      <p>{error.message}</p>
    </div>
  ),

  notFoundComponent: () => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>🚫 404 - Pokémon Not Found</h2>
      <p>That Pokémon doesn't exist in the database.</p>
    </div>
  ),

  component: PokemonName,
})

function PokemonName() {
  const pokemon = Route.useLoaderData()
  
  return (
    <div>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.types}</p>
    </div>
  )
}