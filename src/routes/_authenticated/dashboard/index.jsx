import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h2>Overview</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, nobis! Ab a quisquam in eaque. Dicta non recusandae exercitationem consequatur labore aliquid facere minima optio voluptas quam, itaque culpa. Odit nostrum sit aspernatur alias laborum, accusamus earum delectus doloribus hic modi vitae! Totam est inventore recusandae atque quo iusto mollitia!</p>
  </div>
}
