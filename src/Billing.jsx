import {React,useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import Sidebar from "./Sidebar";
const Billing =()=>{
  const [nav, setNav] = useState(false);
  const handleNav = () => {
      setNav(!nav);
    };
    return(
        <>
                 <div className=' flex flex-col md:flex-row w-full justify-between'>
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

      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-0 w-full xsm:w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-full  xsm:w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
        }
      >
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
          <div class="flex flex-col p-6 m-3 mx-3  w-[95%] md:w-[80%]  text-gray-200 bg-white rounded-lg border border-gray-900 shadow  dark:text-black ">
          
            <div className="my-5">
                
              <h3 class=" text-2xl font-semibold">Subscreption Plan</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
            </div>
            <div className="my-3">
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Your current Plan</p>

              <h3 class=" text-lg ">Pay as you go</h3>
            </div>
            <div className="my-3">
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Free optimizations remanining</p>

              <h3 class=" text-lg ">0</h3>
            </div>
            <div className="my-3">
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Ai credits remanining</p>

              <h3 class=" text-lg ">10</h3>
            </div>
            <div className="my-5">
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Next reset</p>

              <h3 class=" text-lg ">2024-05-05</h3>
            </div>
            <div className="my-5">
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Extra image Prize</p>

              <h3 class=" text-lg ">0.03 USD</h3>
            </div>
            
         <div className="flex flex-col sm:flex-row sm:items-center mt-2">
         <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border w-fit sm:w-auto border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">

Upgrade
</button>
	<button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4  w-fit sm:w-auto focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
Increase monthly cap
</button>
	<button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4  w-fit sm:w-auto focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">

Cancle subscription
</button>
         </div>
                    </div>
   </div>
        </>
    )
}

export default Billing;