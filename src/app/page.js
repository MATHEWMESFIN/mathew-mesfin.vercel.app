import Image from 'next/image'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className='container mt-24 mx-auto py-4 px-2'>
        <Hero />
        <About />
      </div>
    </main>
  )
}
