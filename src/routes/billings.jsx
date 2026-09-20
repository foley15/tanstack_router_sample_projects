import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h2>Billings</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur corporis. Placeat unde minima dolorem deserunt aliquid iure aperiam incidunt, repellat corporis est ipsum magnam amet maiores repellendus ab sit dicta facere ipsa animi! Dolorum quia eius obcaecati nostrum dignissimos sapiente, nemo distinctio, voluptas praesentium minima laudantium nihil, beatae ratione.</p>
  </div>
}
