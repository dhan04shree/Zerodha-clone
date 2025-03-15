import Pricing from "./Pricing";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default function HomePage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Stats/>
        <Pricing/>
        <Education/>
        {/* <Awards/> */}
        <OpenAccount/>
        <Footer/>
        </>
    );
}