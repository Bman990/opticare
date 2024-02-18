// //AboutUs

// import '/StyleSheet/AboutUs.css'
// import { AboutUsBox } from './AboutUsBox'
// import CalendarCheck from './Calender'
// import Clock from './Clock'
// import Envelope from './Envelope'
// import Megaphone from './MegaPhone'
// import Shop from './Shop'
// import Telephone from './Telephone'

// export const AboutUs: React.FC = () => {
//     return (
//         <section className='aboutUsContainer' id="features">  
//             <div className='aboutUsContent'>

//                 <div className='sectionHeader'>
//                     <h1>Outstanding Support Features</h1>
//                     <h3> Immerse in OptiCare's optimized solutions for outsourced support. Elevate your customer experience with tailored features designed for success.</h3>
//                 </div>


//                 <div className='cardGridContainer'>
//                     <div className='cardGridDiv'>
                        
//                     <AboutUsBox svg={Clock} heading='24/7' details='OptiCare is your 24/7 customer support partner, ensuring unparalleled assistance for your customers anytime they need it.' />

//                     <AboutUsBox svg={CalendarCheck} heading='365' details='OptiCare offers support every day of the year for uninterrupted service, ensuring your business operates seamlessly.' />

//                     <AboutUsBox svg={Envelope} heading='Email' details='OptiCare excels in email support, ensuring seamless and responsive communication for your customers.' />

//                     <AboutUsBox svg={Telephone} heading='Telephone' details='OptiCare excels in phone support, handling customer calls with expertise and efficiency.' />

//                     <AboutUsBox svg={Megaphone} heading='Social Media' details='OptiCare expertly handle your social media direct messages (DMs), providing responsive and personalized assistance.' />

//                     <AboutUsBox svg={Shop} heading='E-Commerce' details='OptiCare handles e-commerce customer support, ensuring your online business is backed by responsive assistance.' />

//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// AboutUs.tsx
import {useState} from 'react';
import '/StyleSheet/AboutUs.css';
import {AboutUsBox} from './AboutUsBox';
import CalendarCheck from './Calender';
import Clock from './Clock';
import Envelope from './Envelope';
import Megaphone from './MegaPhone';
import Shop from './Shop';
import Telephone from './Telephone';

export const AboutUs: React.FC = () => {
    const initialBoxesData = [
        {
            svg: Clock,
            defaultHeading: '24/7 Support',
            defaultDetails: 'OptiCare is your 24/7 customer support partner, ensuring unparalleled assistance for your customers anytime they need it.',
            hoverHeading: 'Always On Assistance',
            hoverDetails: 'Our dedicated team works tirelessly around the clock, employing a dynamic roster of skilled agents ready to handle your customers\' inquiries. We assure you unwavering support, even as the world sleeps.',
          },
          {
            svg: CalendarCheck,
            defaultHeading: '365 Days',
            defaultDetails: 'OptiCare offers support every day of the year for uninterrupted service, ensuring your business operates seamlessly.',
            hoverHeading: 'Year-Round Support',
            hoverDetails: 'OptiCare stands by you 365 days a year, guaranteeing uninterrupted service and dedicated assistance every single day. Our commitment ensures that your business operates seamlessly, addressing your needs around the year.',
          },
          {
            svg: Envelope,
            defaultHeading: 'Email Support',
            defaultDetails: 'OptiCare excels in email support, ensuring seamless and responsive communication for your customers.',
            hoverHeading: 'Advanced Email Assistance',
            hoverDetails: 'Our dedicated team ensures seamless and responsive interactions, equipped to handle inquiries from any email provider. We pride ourselves on adapting to your platform, providing a tailored experience for you and your customers.',
          },
          {
            svg: Telephone,
            defaultHeading: 'Phone Support',
            defaultDetails: 'OptiCare excels in phone support, handling customer calls with expertise and efficiency.',
            hoverHeading: 'Global Phone Assistance',
            hoverDetails: 'OptiCare excels in phone support, seamlessly handling customer calls from every corner of the world with expertise and efficiency. Our global reach ensures that your customers receive top-notch assistance, regardless of their location or time zone.',
          },
          {
            svg: Megaphone,
            defaultHeading: 'Social Media Assistance',
            defaultDetails: 'OptiCare expertly handles your social media direct messages (DMs), providing responsive and personalized assistance.',
            hoverHeading: 'Dynamic Social Engagement',
            hoverDetails: 'Our expert team ensures responsive and personalized assistance across all social media platforms. From Facebook to Twitter, Instagram, and beyond, we seamlessly manage your interactions, elevating your brand presence on every channel.',
          },
          {
            svg: Shop,
            defaultHeading: 'E-Commerce Support',
            defaultDetails: 'OptiCare handles e-commerce customer support, ensuring your online business is backed by responsive assistance.',
            hoverHeading: 'Elevated E-Commerce Support',
            hoverDetails: 'From order inquiries to shipping details, we ensure responsive and personalized assistance, contributing to a seamless and thriving online shopping experience for your customers.',
          },
    ];
  
    const [hoveredIndexes, setHoveredIndexes] = useState<number[]>([]);

    const handleMouseEnter = (index: number) => {
      setHoveredIndexes((prevIndexes) => [...prevIndexes, index]);
    };
  
    const handleMouseLeave = (index: number) => {
      setHoveredIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
    };
  
    return (
      <section className="aboutUsContainer" id="features">
        <div className="aboutUsContent">
          <div className="sectionHeader">
            <h1>Outstanding Support Features</h1>
            <h3>Immerse in OptiCare's optimized solutions for outsourced support...</h3>
          </div>
  
          <div className="cardGridContainer">
            <div className="cardGridDiv">
              {initialBoxesData.map((boxData, index) => (
                <AboutUsBox
                  key={index}
                  index={index}
                  svg={boxData.svg}
                  defaultHeading={boxData.defaultHeading}
                  defaultDetails={boxData.defaultDetails}
                  hoverHeading={boxData.hoverHeading}
                  hoverDetails={boxData.hoverDetails}
                  isHovered={hoveredIndexes.includes(index)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };