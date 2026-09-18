import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../../data/products'

export const Route = createFileRoute('/products/')({
  component: ProductsComponent,
})

function ProductsComponent() {
  return <div>
    <h2>Products</h2>
    <ul>
    {products.map(product => (
      <li key={product.id}>
      <Link to="/products/$productId"
            params={{productId: product.id}}>
              {product.name}
      </Link>
      </li>
    ))}
    </ul>
  </div>
}
