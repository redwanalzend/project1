import React from "react";


function Third(props){
  

    return(
      <div className="w-full my-[10%]">
      <div className=" sm-[60vh] lg:h-[60vh] 2xl:h-[75vh] bg-green-950  mx-3 bg-no-repeat hover:scale-110 " style={{backgroundImage: "url(https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png)"}}>
        <p className="text-white text-4xl text-center pt-5 sm:pt-[5%] lg-pt[15%] 2xl:pt-[18%]">{props.name}</p>
        <p className=" text-green-800 text-2xl text-center pt-[10%]">{props.valu}</p>
        <img className="2xl:w-[70%] sm:w-[50%] m-auto" src={props.img}/>
        <button className="text-white bg-green-800 ml-[28%] sm:ml-[30%] mb-10 sm:mb-6  h-10   w-[48%] rounded-2xl  ">{props.but}</button>
      </div>
      </div>
    )       
}   

export default Third