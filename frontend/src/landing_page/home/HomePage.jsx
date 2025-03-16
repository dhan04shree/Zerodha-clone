import Pricing from "./Pricing";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
export default function HomePage(){
    return(
        <>
        <Hero/>
        <Stats/>
        <Pricing/>
        <Education/>
        {/* <Awards/> */}
        <OpenAccount/>
       
        </>
    );
}