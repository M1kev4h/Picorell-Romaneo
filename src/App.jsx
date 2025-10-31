import React from 'react'
import { AppRoutes } from './routes/AppRoutes.jsx'
import { Navbar } from './components/Navbar/Navbar'
function App() {
 

  return (
    <>
    <Navbar/>
    <main>
     <AppRoutes/>
    </main>
    </>
  )
}

export default App
