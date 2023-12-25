import Image from 'next/image'
import { App } from './components/Carousel';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <App />
    </main>
  )
}
