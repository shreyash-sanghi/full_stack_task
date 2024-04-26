import {React,useState} from "react";
import { Link,NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Sidebar = ()=>{
    const [nav, setNav] = useState(false);
    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
      };
    return(
        <>
        
    <div className="flex         flex-col justify-between">
    <div class=" flex justify-between  md:hidden ">

    <p class="text-2xl ml-5 text-green-500 font-semibold">SETTINGS</p> 
    <svg onClick={handleNav} class="fill-current mr-5  text-black h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z"/></svg>
          </div>
<div class="flex md:min-h-screen bg-gray-800 " >

<div class="z-20  hidden w-80 pl-2 overflow-y-auto bg-gray-800 md:block">
    <div>
        <div class="text-white">
            <div class="flex p-2  bg-gray-800">
                <div class="flex py-3 px-2 items-center">
                <p class="text-2xl text-green-500 font-semibold">SETTINGS</p> 
                </div>
            </div>
       
            <div className="border-2 w-[99%] rounded-lg px-2">
                <ul class="mt-6 leading-10">
                    <li class="relative px-2 py-1 ">
                        <Link to={"/"}>
                        <a class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                            href=" #">
                                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>

                            <span class="ml-4">Overview</span>
                        </a>
                        </Link> 
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">ALT text</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">FIlename</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">Broken Links</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">SEO metadata</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <Link to={"/billing"}>
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">Billing Information</span>
                            </span>
                     
                
                        </div>
                        </Link>
                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">Language</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>


      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-0 w-full xsm:w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-full  xsm:w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className="flex justify-between items-center">
        <h1 className='w-full text-3xl xsm:hidden font-bold text-[#00df9a] m-4'>SETTING</h1>

          <div onClick={handleNav} className='block my-2 ml-2 justify-end text-white pr-5 md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
           </div>
        </div>
                <div className="p-3 space-y-2 dark:bg-gray-100 min-h-full  w-full md:w-[21%] lg:w-1/6">
          {/* <div className="flex items-center p-2 text-white space-x-4">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-12 h-12 hidden lg:block rounded-full dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">Dashboard</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400 "
                >
                  Owners EventX
                </a>
              </span>
            </div>
          </div> */}
           <ul class="mt-6 leading-10">
                    <li class="relative px-2 py-1 ">
                        <Link to={"/"}>
                        <a class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 cursor-pointer hover:text-green-500" 
                            href=" #">
                                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>

                            <span class="ml-4">Overview</span>
                        </a>
                        </Link> 
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-gray-800 hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">ALT text</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-gray-800 hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">FIlename</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-gray-800 hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">Broken Links</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-gray-800 hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">SEO metadata</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <Link to={"/billing"}>
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-gray-800 hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">Billing Information</span>
                            </span>
                     
                
                        </div>
                        </Link>
                  
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-gray-800 hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">Language</span>
                            </span>
                     
                
                        </div>

                  
                    </li>
                </ul>
        </div>
      </ul>

{/* <aside
    class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto  bg-gray-900 dark:bg-gray-800 md:hidden"
    x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0 transform -translate-x-20" 
  >
    <div>
        <div class="text-white">
            <div class="flex p-2  bg-gray-800">
                <div class="flex py-3 px-2 items-center">
                    <p class="text-2xl text-green-500 font-semibold">SETTINGS</p> 
                </div>
            </div>
            <div>
                <ul class="mt-6 leading-10">
                    <li class="relative px-2 py-1 ">
                        <a class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
                            href=" #">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span class="ml-4">DASHBOARD</span>
                        </a>
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                <span class="ml-4">ITEM</span>
                            </span>
                           

                        </div>

                    
                    </li>
                </ul>
            </div>
        </div>
    </div>
</aside> */}

<div class="flex flex-col flex-1 w-full overflow-y-auto">
   

</div>
</div>
</div>
        </>
    )
}

export default Sidebar;