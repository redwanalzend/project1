import React from "react";
import img5 from '../../imges/5.jpg'
import img6 from '../../imges/6.jpg'
import img7 from '../../imges/7.jpg'
import img8 from '../../imges/8.jpg'

function Sixth(){
    return(
        <div>
            
                <div className="w-[70%] mx-[15%]">
                    <p className="text-green-700 text-2xl  ">All-time best sellers</p>
                    <div className="flex justify-between py-6">
                    <p className="lg:text-4xl xl:text-5xl text-start w-[40%] sm:text-2xl md:text-3xl text-lg ">Items everyone loves</p>
                    <button className=" bg-green-700 w-30 sm:w-40 h-10 text-white rounded-2xl hover:bg-green-900 ">View all products</button>
                    </div> 
                </div>



            <div className="xl:flex justify-between mx-[15%] lg:grid grid-cols-2">
                <div className="mr-[1%]">
                <img className="w-full" src={img5}/>
               <p className="Texta text-center">Transport cage</p>
               <p className="Texta text-center">$25.00</p>
                </div>

                <div className="mr-[1%]">

               <img className="w-full" src={img6}/>
               <p className="Texta text-center">Dog leash</p>
               <p className="Texta text-center">$25.00</p>
               </div>

               <div className="mr-[1%]">
               
               <img className="w-full" src={img7}/>
               <p className="Texta text-center">Animal transport cage</p>
               <p className="Texta text-center">$35.00 $25.00</p>
               </div>
               <div>

               <img className="w-full" src={img8}/>
               <p className="Texta text-center">Colorful cat leash</p>
               <p className="Texta text-center">$12.00</p>
               </div>

            </div>            
                


        </div>
    )
}

export default Sixth