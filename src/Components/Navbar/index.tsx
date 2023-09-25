import {NavLink } from "react-router-dom";
import logo from '../../assets/icons/vroom.svg';
export default function index() {
  return (
    <>
        <nav className=" bg-transparent absolute w-full">
            <div className="container"></div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 px-10 ">
                <NavLink to="/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                </NavLink>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-small font-medium flex flex-col p-4 md:p-0 mt-4 
                        rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                        <li>
                        <NavLink to="/" className="block py-2 pl-3 pr-4 
                         bg-blue-700 rounded md:bg-transparent md:p-0">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about" className="block py-2 pl-3 pr-4 
                         rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                          md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                           dark:hover:text-white md:dark:hover:bg-transparent">About us</NavLink>
                        </li>
                        <li>
                        <NavLink to="/" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Become a Vroomer</NavLink>
                        </li>
                        <li>
                        <NavLink to="/" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ride with</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
