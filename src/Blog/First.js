import React from "react";


function First(){
    return(
        <div>
        <div style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png)"}} 
        className="w-100% h-14 bg-green-900 flex justify-around px-[10%]  py-4 text-white ">
         <p className="w-25% flex "> <p className="font-bold px-1" >International</p> Shipping Services</p>
         <p className="w-25% hidden lg:flex  ">See our <p className="font-bold px-1">store hours</p> and services</p>
         <p className="w-25% hidden lg:flex">We price match to give you the <p className="font-bold px-1">best deals</p></p>
        </div>
        <div>
         <div style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/05/banner-22@2x-scaled.jpg)"}}
         className="wx-100% h-96 bg-center bg-cover" >
             <p className="font-bold text-white text-center pt-28 text-5xl ">Blog</p>
             
         </div>
        </div>
        
 </div>
)
}

export default First