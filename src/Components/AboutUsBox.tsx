
// import React from 'react';
// import '/StyleSheet/Box.css'

// interface AboutUsBoxProps {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     svg?: React.FC<any>
//     heading: string;
//     details: string;
// }

// export const AboutUsBox: React.FC<AboutUsBoxProps> = ({svg: SvgComponent, heading, details}) => {
//     return (
//         <div className="boxContainer">
//             <div className="boxSvgDiv">
//                 {SvgComponent && <SvgComponent />}
//             </div>

//             <div className="boxHeadingDiv">
//                 <h2>{heading}</h2>
//             </div>

//             <div className="boxDetailsDiv">
//                 <p>{details}</p>
//             </div>
//         </div>
//     )
// }

// AboutUsBox.tsx
import React, { useState } from 'react';
import '/StyleSheet/Box.css';

interface AboutUsBoxProps {
    svg?: React.FC<any>;
    defaultHeading: string;
    defaultDetails: string;
    hoverHeading: string;
    hoverDetails: string;
    isHovered: boolean;
    index: number;
    onMouseEnter: (index: number) => void;
    onMouseLeave: (index: number) => void;
  }
  
  export const AboutUsBox: React.FC<AboutUsBoxProps> = ({
    svg: SvgComponent,
    defaultHeading,
    defaultDetails,
    hoverHeading,
    hoverDetails,
    isHovered,
    index,
    onMouseEnter,
    onMouseLeave,
  }) => {
    return (
      <div
        className="boxContainer"
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={() => onMouseLeave(index)}
      >
        <div className="boxSvgDiv">{SvgComponent && <SvgComponent />}</div>
  
        <div className="boxHeadingDiv">
          <h2>{isHovered ? hoverHeading : defaultHeading}</h2>
        </div>
  
        <div className="boxDetailsDiv">
          <p>{isHovered ? hoverDetails : defaultDetails}</p>
        </div>
      </div>
    );
  };