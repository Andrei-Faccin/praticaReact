import { ReactKeycloakProvider } from '@react-keycloak/web'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import keycloak from './infra/keycloak'
import AppRoutes from './main/AppRoutes'
import Login from './pages/login'


function App() {
  // aqui pode ficar um códio de JS
  // exemplo:
  // const name = "Andrei";
  return (
    <ReactKeycloakProvider authClient = {keycloak}>
        <React.StrictMode>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </React.StrictMode>
    </ReactKeycloakProvider>
  )
}

export default App
