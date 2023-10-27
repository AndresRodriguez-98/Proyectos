import React from 'react'
import Logo from '../assets/Mesa de trabajo 3.png'

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-[#0a192f] dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center h-8">
          <img src={Logo} className="w-full mr-3 h-24" alt="Logo" />
        </a>
        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-light text-xs mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-[#64ffda] rounded md:bg-transparent md:text-[#64ffda] md:p-0 md:dark:text-[#64ffda] dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">01.About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#64ffda] md:p-0 dark:text-white md:dark:hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">02.Work</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#64ffda] md:p-0 dark:text-white md:dark:hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">03.Experience</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#64ffda] md:p-0 dark:text-white md:dark:hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">04.Contact</a>
            </li>
            <li>
              <button>
                <span>Resume</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar