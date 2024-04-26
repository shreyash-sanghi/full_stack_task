import {React,useState} from "react";
import { Link,NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Sidebar = ()=>{
    const [nav, setNav] = useState(false);
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



<div class="flex flex-col flex-1 w-full overflow-y-auto">
   

</div>
</div>
</div>
        </>
    )
}

export default Sidebar;