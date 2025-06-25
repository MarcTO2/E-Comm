import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <main className='bg-dark text-white p-5' style={{ minHeight: '100vh'}}>
      <h1>Welcome to VEX.E</h1>
      <p>This is a futuristic e-commerce site</p>
    </main>
    </>
  )
}

export default App
