import React from "react";


function Ninth(){
    return(
        <div>
                <div className="xl:flex pt-[5%]">
                
                <div className="bg-cover bg-center w-full h-[50vh] hover:scale-110 hover:cursor-pointer" style={{ backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-9@2x.jpg)"}}> 
                    <p className="text-white text-center pt-[20%] sm:pt-[12%] text-lg">Find the best animl Supplies</p>
                    <p className="text-white text-center pt-[3%] text-4xl sm:text-5xl">Pouplar accessories</p>
                    <button className="sm:ml-[40%]  mx-[24%] text-white bg-green-800 w-48 h-[10%] rounded-3xl mt-[5%] hover:bg-white hover:text-black">view all toys accessories</button>
                </div>
                <div className="bg-cover bg-center w-full h-[50vh] hover:scale-110 hover:cursor-pointer" style={{ backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-8@2x.jpg)"}}>
                    <p className="text-white text-center pt-[20%] sm:pt-[12%] text-lg">Find the best food</p>
                    <p className="text-white text-center pt-[3%] text-4xl sm:text-5xl">New food arrival</p>
                    <button className="sm:ml-[40%] mx-[24%] text-white bg-green-800 w-48 h-[10%] rounded-3xl mt-[5%] hover:bg-white hover:text-black">view all food producat</button> 

                </div>
                </div>
            
        </div>
    )
}


export default Ninth