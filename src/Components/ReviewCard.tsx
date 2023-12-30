import '/StyleSheet/ReviewCard.css'

interface ReviewCardProps{
    text: string;
    name: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({text, name}) => {
    return(
        <div className='cardContainer'>
            <div className='cardContent'>
                <div className='cardTextDiv'>

                    <div className='quoteDiv'>
                    <p className='quotationStyle'>&#x201C;</p>
                    <p className='textStyle'>{text}</p>
                    </div>

                    <p className='nameStyle'>{name}</p>
                </div>
            </div>
        </div>
    )
}