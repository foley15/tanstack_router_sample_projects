import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/about')({
    component: About
})

function About() {
    return(
        <div>
            <h2>About Us</h2>
        </div>
    )
}