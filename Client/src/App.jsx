import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <ProductGrid />
    <main className='bg-dark text-white p-5' style={{ minHeight: '50vh'}}>
      <p>More content coming soon...</p>
    </main>
    </>
  )
}

export default App
