// import '/StyleSheet/ReviewCard.css'

// interface ReviewCardProps{
//     text: string;
//     name: string;
// }

// export const ReviewCard: React.FC<ReviewCardProps> = ({text, name}) => {
//     return(
//         <div className='cardContainer'>
//             <div className='cardContent'>
//                 <div className='cardTextDiv'>

//                     <div className='quoteDiv'>
//                     <p className='quotationStyle'>&#x201C;</p>
//                     <p className='textStyle'>{text}</p>
//                     </div>

//                     <p className='nameStyle'>{name}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// ReviewCard.tsx
import React, { useState } from 'react';
import '/StyleSheet/ReviewCard.css';

interface ReviewCardProps {
  defaultText: string;
  defaultName: string;
  hoverText: string;
  hoverName: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ defaultText, defaultName, hoverText, hoverName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='cardContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='cardContent'>
        <div className='cardTextDiv'>
          <div className='quoteDiv'>
            <p className='quotationStyle'>{isHovered ? '' : '“'}</p>
            <p className='textStyle'>{isHovered ? hoverText : defaultText}</p>
          </div>
          <p className='nameStyle'>{isHovered ? hoverName : defaultName}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
