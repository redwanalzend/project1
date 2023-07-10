import React from "react";
import img1 from '../../imges/1.jpg'
import img2 from '../../imges/2.jpg'
import img3 from '../../imges/3.jpg'
import img4 from '../../imges/4.jpg'

function Card(){
    return(
        <div className=" xl:flex justify-between mx-[15%] lg:grid grid-cols-2 ">
            <div className="mr-[1%]">
                <img className="w-full" src={img1}/>
                <p className="Texta text-center">Bed (1)</p>
            </div>
            <div className="mr-[1%]">
                <img className="w-full " src={img2}/>
                <p className="Texta text-center">Food (6)</p>
            </div>
            <div className="mr-[1%]">
                <img className="w-full " src={img3}/>
                <p className="Texta text-center">Toys (6)</p>
            </div>
            <div className=""> 
                <img className="w-full" src={img4}/>
                <p className="Texta text-center">Transport (7)</p>
                
            </div>
      
        </div>
    )
}
export default Card