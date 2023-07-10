import React from "react";
function Dog(){
    return(
        <div> 
                <p className="text-center mt-20 text-gray-600 text-2xl ">Meet our awesome staff</p>
                <p className="text-center mt-6 text-4xl">Passionate about animals</p>
           <div className="sm:block  lg:flex justify-around mx-[15%] mt-32 ">
                
                <div className="lg:w-96 lg:mr-5"><img className="w-full" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/staff-1@2x.jpg"/>
                     <p className="my-[5%] text-2xl">Cheryl Dobson</p>
                     <p className="text-l my-4  ">Eu elementum sodales malesuada dictum amet, neque diam sed ac egestas augue.</p>
                </div>
                <div className="lg:w-96 lg:mr-5" ><img className="w-full lg:w-96" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-8.jpg"/>
                     <p  className="my-[5%] text-2xl">Andrew McNiel</p>
                     <p className="text-l my-4 ">Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.</p>
                </div>
                <div className="lg:w-96"><img className="w-full lg:w-96" src="https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/04/staff-3@2x.jpg"/>
                     <p  className="my-[5%] text-2xl"> Sarah Green</p>
                     <p className="text-l my-4  "> Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.</p>
                </div>
           </div>    
        </div>
    )
}

export default Dog