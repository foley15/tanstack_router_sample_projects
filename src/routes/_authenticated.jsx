// routes/_authenticated.jsx
import { createFileRoute, redirect, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (!isLoggedIn) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: () => <Outlet />,
})