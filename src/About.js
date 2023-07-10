import React from "react";
import Info from "./About/Info";
import Midle from './About/Midle'
import Fixed from "./About/Fixed";
import Dog from './About/Dog'
import Photo from "./About/Photo";
import Last from "./About/Last";
function About(){
    return(
        <div>
            <Info/>
            <Midle/>
            <Fixed/>
            <Dog/>
            <Photo/>
            <Last/>
        </div>
    )
}

export default About