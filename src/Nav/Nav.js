import React from "react";

import { Outlet ,Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <div>
        <div className="flex justify-around px-[6%] py-[1%]">
            <img className="img" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2021/05/petsupplies-svg-logo-2.svg"/>
            <input className=" hidden lg:block w-[25%] bg-slate-50 rounded-3xl" placeholder="Search..."/>
            <p className="hidden lg:block">Questions? Call us : 1.800.123.4567</p>
        </div>

        
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 m-auto" id="navbar-cta">
    <ul class=" flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-[120%]  ">
      <li>
        <Link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 mr-10" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mr-10">About</Link>
      </li>
      <li>
        <Link to="/blog" class="block py- pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mr-10">Blog</Link>
      </li>
      <li>
        <Link to="/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>


        </div>
        <Outlet/>
        <div>
        <div className="bg-green-800 w-100% h-[65vh] flex pt-[110px] sm:px-[5%] md:px-[10%] lg:px-[15%] relative">
        <div className="w-[20%] ">
            <img className="lg:w-[90%] hidden sm:block " src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/06/mobile-light-pet-logo@2x.png"/>
            <p className="text-white w-100%] text-lg pt-12 hidden sm:block">1234 Avada Avenue Avadaville
               info@your-company.com
               Call us: (1) 234 5678</p>
        </div>
        <div className="text-white mx-[5%] w-[20%] hidden sm:block">
            <p className="text-bold-800 text-3xl pb-5">Shop by brand</p>
            <p className="py-4 text-lg">Food</p>
            <p className="py-4 text-lg">Bed</p>
            <p className="py-4 text-lg">Toys</p>
            <p className="py-4 text-lg">Transport</p>
        </div>
        <div className="text-white mx-[5%] w-[20%] hidden sm:block">
            <p className="text-3xl pb-5">Useful links</p>
            <p className="py-4 text-lg">My account</p>
            <p className="py-4 text-lg">Orders</p>
            <p className="py-4 text-lg">Checkout</p>
            <p className="py-4 text-lg">Cart</p>
        </div>
        <div className=" w-[300px] bg-green-700 h-[300px] mr-20 sm:m-0" style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png)"}}>
            <p className="text-white text-2xl p-6 ">Subscribe to our newsletter</p>
            <input className="mx-[15%] h-12 rounded-3xl w-[70%]" placeholder="   insert your email.."/>
            <button className="mx-[15%] h-12 rounded-3xl w-[70%] bg-green-500 mt-7">Subscribe</button>
        </div>
    </div>
        <div className="bg-black text-white text-center">
                <p>© Copyright 2012 - 2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
        </div>
        </div>
        </>
    )
}

export default Nav