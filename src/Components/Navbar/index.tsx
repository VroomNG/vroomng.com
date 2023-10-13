import {NavLink } from "react-router-dom";
import {useState } from "react"
import logo from '../../assets/icons/vroom.svg';


export default function Index() {

const [toggle, setToggle ] = useState(false);

const ontoggle = () => {
    setToggle(true)
}
const close = () => {
    setToggle(false)
}
  return (
    <>
        <nav className=" bg-transparent absolute w-full">
        {
        toggle == true? 
           <>
            <div className="xl:hidden md:hidden lg:hidden absolute opacity-70 flex justify-end bg-black w-full h-[200vh]">
               <p>.</p>
            </div>
            <div className="absolute md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="bg-transparent w-full h-[200vh] flex justify-end ">
                    <div className="mobile-nav w-[80%] h-[200vh] bg-white ">
                        <div className="logo h-[20] flex ">
                            <span className="w-[70%] flex justify-center items-center">
                                <NavLink to="/" className="flex items-center">
                                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" /> 
                                </NavLink>
                            </span>        
                            <span className="text-brand600 flex justify-center items-center text-[50px] w-[30%]">
                               <button onClick={close}> &times; </button>
                            </span> 
                        </div>
                        <div className=" flex justify-center">
                            <div className="w-[90%] mt-4">
                                <NavLink to="/">
                                    <button onClick={close}
                                      className="bg-brand600 hover:bg-brand400 text-white p-4 rounded-md w-full">
                                        Home
                                    </button> 
                                </NavLink>
                                <NavLink to="/about">
                                    <button onClick={close} 
                                      className="bg-brand600 hover:bg-brand400 text-white p-4 my-2 rounded-md w-full">
                                        About us
                                    </button> 
                                </NavLink>
                                <NavLink to="/contact">
                                    <button onClick={close} 
                                        className="bg-brand600 hover:bg-brand400 text-white p-4 my-2  rounded-md w-full">
                                        Contact us
                                    </button> 
                                </NavLink>
                                <NavLink to="/joinVroom">
                                    <button onClick={close} 
                                     className="bg-brand600 hover:bg-brand400 text-white p-4 my-2  rounded-md w-full">
                                        Become a Vroomer
                                    </button> 
                                </NavLink>
                                <NavLink to="/rider">
                                    <button onClick={close} 
                                     className="bg-brand600 hover:bg-brand400 text-white p-4 my-2  rounded-md w-full">
                                        Ride With Us
                                    </button> 
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 
        </>
            :
            <div>

            </div>
        }
            
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 px-10 ">
                <NavLink to="/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                </NavLink>
                <button data-collapse-toggle="navbar-default" type="button"
                 className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-default" aria-expanded="false" onClick={ontoggle}>
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
                         bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:hover:text-blue-500">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about" className="block py-2 pl-3 pr-4 
                         rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                          md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                           dark:hover:text-white md:dark:hover:bg-transparent">About us</NavLink>
                        </li>
                        <li>
                        <NavLink to="/joinVroom" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Become a Vroomer</NavLink>
                        </li>
                        <li>
                        <NavLink to="/rider" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ride with us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
