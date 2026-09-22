import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'

// 1. Updated schema with 'page', using Zod coercion since URL search params are strings
const productSearchSchema = z.object({
  category: z.enum(['all', 'shoes', 'bags', 'hats']).catch('all'),
  sort: z.enum(['newest', 'price']).catch('newest'),
  page: z.coerce.number().int().positive().catch(1),
})

// 2. Mock API function simulating a database or network fetch with a delay
async function mockFetchProducts({ page, category }) {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Fake network lag
  
  return {
    products: [
      `Product A (${category} - Page ${page})`,
      `Product B (${category} - Page ${page})`,
    ],
    totalPages: 3,
  }
}

// 3. Route definition with explicit loaderDeps and loader
export const Route = createFileRoute('/product')({
  validateSearch: productSearchSchema,
  // loaderDeps explicitly isolates only the parameters that trigger a refetch
  loaderDeps: ({ search: { page, category } }) => ({ page, category }),
  loader: async ({ deps: { page, category } }) => {
    return await mockFetchProducts({ page, category })
  },
  component: ProductList,
})

function ProductList() {
  // Access validated search params and fetched loader data
  const { category, page } = Route.useSearch()
  const { products, totalPages } = Route.useLoaderData()
  const navigate = Route.useNavigate()

  return (
    <div>
      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) =>
          navigate({ search: (prev) => ({ ...prev, category: e.target.value, page: 1 }) })
        }
      >
        <option value="all">All</option>
        <option value="shoes">Shoes</option>
        <option value="bags">Bags</option>
        <option value="hats">Hats</option>
      </select>

      {/* Product List Render */}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div>
        <Link 
          search={(prev) => ({ ...prev, page: Math.max(prev.page - 1, 1) })}
          disabled={page <= 1}
        >
          Previous
        </Link>
        
        <span> Page {page} of {totalPages} </span>

        <Link 
          search={(prev) => ({ ...prev, page: Math.min(prev.page + 1, totalPages) })}
        >
          Next
        </Link>
      </div>

      {/* Unrelated search param updater to test that loaderDeps prevents refetching */}
      <Link search={(prev) => ({ ...prev, sort: prev.sort === 'newest' ? 'price' : 'newest' })}>
        Toggle Sort (Won't trigger product loader)
      </Link>
    </div>
  )
}