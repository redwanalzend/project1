import React from "react";

import Text from "./Home/Text/Text"; 
import Card from "./Home/Card/Card";
import Third from "./Home/Third/Third";
import Mid from "./Home/Mid/Mid";
import Fourth from "./Home/Fourth/Fourth";
import Sixth from "./Home/Sixth/Sixth";
import Seventh from "./Home/Seventh/Seventh";
import './App.css'
import Eighth from "./Home/Eighth/Eighth";
import Ninth from "./Home/Ninth/Ninth";



function Homee(){
    return(
        <div>
            
            
            <Mid/>
            <Text/>
            <Card/>
            <div className="2xl:flex justify-around mx-[14%]  lg:grid grid-cols-2 ">
            <Third name='Kibble' valu='Dry dog food' but='Shop dry food' img='https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-17.png'/>
            <Third name='Morst' valu='Canned dog food'  but='Shop moist food 'img='https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-18.png'/>
            <Third name='Frozen' valu='Freez-Dried dog food'  but='Shop frozen food' img='https://avada.theme-fusion.com/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-16.png'/>
            </div>
            <Fourth/>  
            <Sixth/>
            <Seventh/>
            <Eighth/>
            <Ninth/>
          
            
        </div>
    )
}

export default Homee