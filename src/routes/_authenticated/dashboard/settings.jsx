import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h2>Settings</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem non, optio tenetur veniam sequi autem vero minus eligendi officiis natus iusto ad magnam ducimus facilis quo sed totam. Ad asperiores doloremque, debitis quis corrupti amet dolor, tempore aliquam sapiente incidunt illum saepe, consequuntur dolore repellendus sint. Eius similique hic cumque?</p>
  </div>
}
