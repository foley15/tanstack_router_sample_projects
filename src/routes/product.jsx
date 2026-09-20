import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'

const productSearchSchema = z.object({
  category: z.enum(['all', 'shoes', 'bags', 'hats']).catch('all'),
  sort: z.enum(['newest', 'price']).catch('newest'),
})

export const Route = createFileRoute('/product')({
  validateSearch: productSearchSchema,
  component: ProductList,
})

function ProductList() {
  const { category, sort } = Route.useSearch()
  const navigate = Route.useNavigate()

  return (
    <div>
      <select
        value={category}
        onChange={(e) =>
          navigate({ search: (prev) => ({ ...prev, category: e.target.value }) })
        }
      >
        <option value="all">All</option>
        <option value="shoes">Shoes</option>
      </select>

      <Link search={(prev) => ({ ...prev, sort: 'price' })}>Sort by price</Link>
    </div>
  )
}