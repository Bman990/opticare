

import '/StyleSheet/AboutUs.css'
import { AboutUsBox } from './AboutUsBox'
import CalendarCheck from './Calender'
import Clock from './Clock'
import Envelope from './Envelope'
import Megaphone from './MegaPhone'
import Shop from './Shop'
import Telephone from './Telephone'

export const AboutUs: React.FC = () => {
    return (
        <section className='aboutUsContainer'>  
            <div className='aboutUsContent'>

                <div className='sectionHeader'>
                    <h1>Outstanding Support Features</h1>
                    <h3> Immerse in OptiCare's optimized solutions for outsourced support. Elevate your customer experience with tailored features designed for success.</h3>
                </div>


                <div className='cardGridContainer'>
                    <div className='cardGridDiv'>
                        
                    <AboutUsBox svg={Clock} heading='24/7' details='OptiCare is your 24/7 customer support partner, ensuring unparalleled assistance for your customers anytime they need it.' />

                    <AboutUsBox svg={CalendarCheck} heading='365' details='OptiCare offers support every day of the year for uninterrupted service, ensuring your business operates seamlessly.' />

                    <AboutUsBox svg={Envelope} heading='Email' details='OptiCare excels in email support, ensuring seamless and responsive communication for your customers.' />

                    <AboutUsBox svg={Telephone} heading='Telephone' details='OptiCare excels in phone support, handling customer calls with expertise and efficiency.' />

                    <AboutUsBox svg={Megaphone} heading='Social Media' details='OptiCare expertly handle your social media direct messages (DMs), providing responsive and personalized assistance.' />

                    <AboutUsBox svg={Shop} heading='E-Commerce' details='OptiCare handles e-commerce customer support, ensuring your online business is backed by responsive assistance.' />

                    </div>
                </div>

            </div>
        </section>
    )
}