import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/billings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h2>Billings</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis itaque nesciunt molestias in impedit quos esse voluptatum, optio ea quo a provident dolor magnam natus dolores aliquam. Modi accusantium nulla voluptates sunt eligendi molestiae iste. Dicta commodi consequuntur culpa recusandae alias officia cupiditate quo reprehenderit tenetur iusto, libero molestiae rerum?</p>
  </div>
}
