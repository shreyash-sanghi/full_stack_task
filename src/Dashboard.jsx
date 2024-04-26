import React from "react";
import Sidebar from "./Sidebar";
const Dashboard = ()=>{
    return(
        <>
            <div className=' flex w-full justify-between'>
  <Sidebar/>
  <main class=" flex flex-col w-full mx-16  ">
 <div class="w-[100%] p-6 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Automatic optimization</h5>
    </a>
    <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">Auto optimize tests different layouts and features, for example, running experiments on standard templates for search styles.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-300 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Deactive
       
    </a>
</div>
 <div class="w-[100%] p-6 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Convert JPG to PNG </h5>
    </a>
    <p class="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <div className="flex justify-between items-center w-[90%] rounded-sm h-[6vh] mb-5 bg-sky-100   border-2">
        <h5 class="mb-2 text-lg pl-2 rounded-md tracking-tight text-black">Transparent element within PNG files will automatically be set to white converted to JPG.</h5>
        <svg class="w-6 h-6 pr-2 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>

    </div>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md dark:bg-green-600  ">
        Active

    </a>
</div>
<div class="w-[100%] p-6 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Advanced image reduction</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The most advanced online compressor used by professionals to reduce the file size of their photos and images Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <div className="flex justify-between items-center w-[90%] h-[6vh] mb-5 bg-sky-100   border-2">
        <h5 class="mb-2 text-lg pl-2 tracking-tight text-black">Noteworthy technology acquisitions 2021</h5>
        <svg class="w-6 h-6 pr-2 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>

    </div>
    <div className="w-full ">
        <h5 class="mb-1 text-md  tracking-tight text-white">Resize oversize images to.</h5>
        <input  className="w-[80%] roun h-8 mb-3" type="number" />
    </div>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md dark:bg-gray-600  ">
       Upgrade
    </a>
</div>
    </main>
    </div>

        </>
    )
}

export default Dashboard;