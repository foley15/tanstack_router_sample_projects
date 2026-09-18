import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
component: () => {
  return (
    <div>
        <header style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', marginBottom: 'none', padding: 0}}>
            <h2>SAMPLE PROJECTS</h2>
            <nav style={{display: 'flex',fontSize:'1.3rem', gap: '0.5rem'}}>
                <Link style={{textDecoration: 'none'}} to="/">Home</Link>
                <Link style={{textDecoration: 'none'}} to="/about">About</Link>
                <Link style={{textDecoration: 'none'}} to="/products">Products</Link>
            </nav>
        </header>
        <hr />
        <main>
            <Outlet />
        </main>
    </div>
  )
}})
