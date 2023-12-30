import { AboutUs } from "./AboutUs";
import {Hero} from "./Hero";
import { Navbar } from "./Navbar";
import { Reviews } from "./Reviews";



export default function Home(){
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Reviews />
        </div>
    )
}