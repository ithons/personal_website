import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
      <nav className="flex justify-center mt-4">
        <ul className="space-x-4">
          <li><Link href="/projects" className="text-blue-500">Projects</Link></li>
          <li><Link href="/photography" className="text-blue-500">Photography</Link></li>
          <li><Link href="/notes" className="text-blue-500">Notes</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home