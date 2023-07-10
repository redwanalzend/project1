import React from "react";
import img12 from '../../imges/12.jpg'
import img13 from '../../imges/13.jpg'
import img14 from '../../imges/14.jpg'
import img15 from '../../imges/15.jpg'


function Eighth(){
    return(

        <>
          <p className="text-center text-5xl my-10">Get the best tips & tricks</p>
            <p className="text-center text-3xl my-7">Recent articles</p>
        
        <div className=" xl:flex justify-between mx-[15%] lg:grid grid-cols-2 ">
        <div className="mr-[1%]">
            <img className="w-full" src={img12}/>
            <p className="Texta text-center">dog (1)</p>
        </div>
        <div className="mr-[1%]">
            <img className="w-full " src={img13}/>
            <p className="Texta text-center">cats (6)</p>
        </div>
        <div className="mr-[1%]">
            <img className="w-full " src={img14}/>
            <p className="Texta text-center">cats (6)</p>
        </div>
        <div className=""> 
            <img className="w-full" src={img15}/>
            <p className="Texta text-center">dog (7)</p>
            
        </div>
  
    </div>
    </>
)
}




export default Eighth