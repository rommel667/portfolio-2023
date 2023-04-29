import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Mode from './components/header/Mode'
import Hero from './components/hero/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="overscroll-contain scroll-smooth xl:px-36 lg:px-24 md:px-20 px-5">
      <Header />
      <Hero />
      <Projects />
      {/* <Technologies /> */}
      {/* <Mode /> */}
    </div>

  )
}
