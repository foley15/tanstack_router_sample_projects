import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { products } from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  loader: ({params}) => {
    const product = products.find(p => p.id === params.productId)

    if (!product) {
      throw new Error(`Product with ID "{params.productId} could not be found"`)
    }

    return product
  },

  component: ProductDetails,
})

function ProductDetails() {
  const product = Route.useLoaderData()
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Product ID: {product.id}</p>
    </div>
  )
}
