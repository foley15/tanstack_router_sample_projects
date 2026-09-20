import { createFileRoute, Link, Outlet, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate({ to: '/login' })
  }

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <h2>Dashboard</h2>
        <button 
          onClick={handleLogout}
          style={{ padding: '6px 12px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </header>

      <div style={{ display: 'flex', gap: '5px', padding: '5px' }}>
        <aside style={{ flex: 1, backgroundColor: '#e2e2e2', padding: '10px' }}>
          <Link
            style={{ display: 'block', marginBottom: '10px', color: '#333', textDecoration: 'none' }}
            to="overview"
            activeOptions={{ exact: true }}
            activeProps={{
              style: { fontWeight: 'bold', color: '#0066cc' },
            }}
          >
            Overview
          </Link>

          <Link
            style={{ display: 'block', marginBottom: '10px', color: '#333', textDecoration: 'none' }}
            to="settings"
            activeProps={{
              style: { fontWeight: 'bold', color: '#0066cc' },
            }}
          >
            Settings
          </Link>

          <Link
            style={{ display: 'block', marginBottom: '10px', color: '#333', textDecoration: 'none' }}
            to="billings"
            activeProps={{
              style: { fontWeight: 'bold', color: '#0066cc' },
            }}
          >
            Billings
          </Link>
        </aside>

        <main style={{ flex: 4, backgroundColor: '#f4f4f4', padding: '10px' }}>
          <Outlet />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi earum
            deleniti dicta, commodi minus magnam quaerat sequi aspernatur incidunt
            saepe eum excepturi ut ipsam doloremque neque quia beatae consequatur!
          </p>
        </main>
      </div>
    </div>
  )
}