import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// The bundler plugin or watcher will automatically generate this JS file
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

const rootElement = document.getElementById('root')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}