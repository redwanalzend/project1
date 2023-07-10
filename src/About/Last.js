import React from "react";
function Last(){
    return(
        <div className="w-100% sm:block lg:flex ">
            <div className="w-full h-96 bg-cover  bg-center hover:scale-110 hover:cursor-pointer " style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-12@2x-scaled.jpg)"}}>
                <p className="text-gray-800 text-center pt-20 text-xl">find the best animls supplies</p>
                <p className="text-gray-900 text-center mt-8 text-4xl">popular accessoires</p>
                <button className="ml-[20%] sm:ml-[38%] mt-10 text-block bg-white w-60 rounded-xl h-10 text-xl">view all toys accessoires</button>
            </div>
            <div className="w-full h-96  bg-cover bg-center hover:scale-110 hover:cursor-pointer" style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-13@2x-scaled.jpg)"}}>
                <p  className="text-white text-center pt-20 text-xl">Find the best food</p>
                <p  className="text-white text-center mt-8 text-4xl">New food arrival</p>
                <button className="ml-[20%] sm:ml-[38%] mt-10 text-block bg-white w-60 rounded-xl h-10 text-xl">view all food products</button>

            </div>
        </div>
    )
}

export default Last


