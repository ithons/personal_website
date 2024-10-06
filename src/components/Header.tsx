import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Mahdi's life</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
          </li>
          <li>
            <Link href="/photography" className="hover:text-yellow-400">Photography</Link>
          </li>
          <li>
            <Link href="/notes" className="hover:text-yellow-400">Notes</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header