// app/routes/login.jsx
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: LoginComponent,
})

function LoginComponent() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // 1. Set the fake login state
    localStorage.setItem('isLoggedIn', 'true')
    
    // 2. Navigate back to the dashboard
    navigate({ to: '/dashboard' })
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Please Log In</h2>
      <p>You need to be authenticated to view the dashboard.</p>
      <button 
        onClick={handleLogin}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Log In Now
      </button>
    </div>
  )
}