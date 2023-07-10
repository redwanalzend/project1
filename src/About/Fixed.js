import React from "react";
function Fixed(){
  
    return(
        <div>
            <div className="w-100% h-96 bg-cover bg-center bg-fixed" style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-5@2x-scaled.jpg)"}}>
                <p className="text-center text-white pt-14 text-xl">FIND THE BEST ANIMAL SUPPLIES</p>
                <p className="font-bold text-center text-white pt-7 text-5xl">New arrivals every weeks</p>
                <div className="">
                <button className="bg-green-800 hover:bg-green-900 ml-[33%] sm:ml-[47%] mt-10 w-36 h-14 rounded-3xl text-white"> vist our shop</button>
                </div>
            </div>
        </div>
    )
}

export default Fixed