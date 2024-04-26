import React from "react";
import Sidebar from "./Sidebar";
const Billing =()=>{
    return(
        <>
                 <div className=' flex w-full justify-between'>
  <Sidebar/>
          <div class="flex flex-col p-6 m-3 mx-3  w-[80%]  text-gray-200 bg-white rounded-lg border border-gray-900 shadow  dark:text-black ">
          
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
            
         <div className="flex items-center mt-2">
         <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">

Upgrade
</button>
	<button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
Increase monthly cap
</button>
	<button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">

Cancle subscription
</button>
         </div>
          
              {/* <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a> */}
          </div>
   </div>
    
{/* </section> */}
        </>
    )
}

export default Billing;