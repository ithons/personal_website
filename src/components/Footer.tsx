import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Mahdi Afshari. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer