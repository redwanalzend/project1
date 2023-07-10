import React from "react";

function Photo(){
    return(
        <div>
            <div style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png)"}} 
             className="w-100% h-60 bg-green-900 flex justify-between  "> <p className="text-white m-auto text-5xl">Users testimonials</p></div>


             <div className="w-100% h-[100%] bg-green-900 ">
                <div className="sm:block lg:flex justify-around px-[10%]">
                <div className='sm:w-full lg:w-[25%] '>
                    <img className="w-24 rounded-full m-auto" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-3.jpg"/> 
                    <p className="  text-white text-center mt-3 text-xl">Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.</p>
                    <p className="  mb-10 text-gray-900 text-center mt-3 text-xl">Lisa Smith, ThemeFusion</p>
                </div>
                <div  className="sm:w-full lg:w-[25%] ">
                    <img  className="w-24 m-auto rounded-full" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-1.jpg"/>
                    <p className="  text-white text-center mt-3 text-xl">Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.</p>
                    <p className="  mb-10 text-gray-900 text-center mt-3 text-xl">Melissa Green, ThemeFusion</p>
                </div>
                <div  className="sm:w-full lg:w-[25%] mb-[5%]">
                    <img  className="w-24 m-auto rounded-full" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-4.jpg"/>
                    <p className=" text-white text-center mt-3 text-xl"> Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.</p>
                    <p className=" mb-10 text-gray-900 text-center mt-3 text-xl">Sarah Roberts, ThemeFusion</p>   
                </div>
                </div>
                
                <div className="sm:block lg:flex justify-around px-[10%] pb-[10%]">
                <div  className="sm:w-full lg:w-[25%]">
                    <img  className="w-24 rounded-full m-auto" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-7.jpg"/>
                    <p className=" text-white text-center mt-3 text-xl">Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.</p>
                    <p className=" text-gray-900 text-center mt-3 text-xl">Melissa Green, ThemeFusion</p>
                </div>
                <div  className="sm:w-full lg:w-[25%]">
                    <img  className="w-24 rounded-full m-auto" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-6.jpg"/>
                    <p className=" text-white text-center mt-3 text-xl">Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.</p>
                    <p className=" text-gray-900 text-center mt-3 text-xl">Melissa Green, ThemeFusion</p>
                </div>
                <div  className="sm:w-full lg:w-[25%]">
                    <img  className="w-24 rounded-full m-auto" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-5.jpg"/>
                    <p className=" text-white text-center mt-3 text-xl">Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.</p>
                    <p className=" text-gray-900 text-center mt-3 text-xl">Melissa Green, ThemeFusion</p>
                </div>
                </div>
                

             </div>
             

        </div>
    )
}

export default Photo