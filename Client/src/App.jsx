import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <main className='bg-dark text-white p-5' style={{ minHeight: '50vh'}}>
      <p>More content coming soon...</p>
    </main>
    </>
  )
}

export default App
