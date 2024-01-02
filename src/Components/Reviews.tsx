import '/StyleSheet/Review.css'
import { ReviewCard } from './ReviewCard'
import { Link } from 'react-router-dom'


export const Reviews: React.FC = () => {
    return (
        <section className="reviewContainer" id="testimonials">
            <div className="reviewContent">

                <div className="reviewLeft">

                    <div className='reviewLTextDiv'>
                        <h1 className='reviewHeadText'>Explore OptiCare's Excellence Through Client Testimonials</h1>
                        <p className='reviewDetailText'>OptiCare is the trusted choice for businesses seeking exceptional customer support. 
                        Our diverse clientele, ranging from startups to established enterprises, attests to the effectiveness of our tailored solutions. 
                        Join the satisfied businesses that have elevated their customer care with OptiCare's dedicated service.</p>

                        <Link to="/opticare/contact" className='linkBtn'>Request consultation</Link>
                    </div>
                </div>

                <div className="reviewRight">

                    <ReviewCard text='OptiCare has been a game-changer for our business. The 24/7 support ensures our customers always have someone to turn to, and the responsiveness is unmatched.' name='John Doe'/>

                    <ReviewCard text= "OptiCare's phone support is exceptional. Whenever our customers call, they experience a level of service that reflects positively on our brand. It's like having our own dedicated support team." name='Jane Doe'/>

                    <ReviewCard text="OptiCare's outstanding support solutions have elevated our customer experience. Their tailored features meet our specific needs, and the results speak for themselves. Highly impressed!" name='Joane Doe'/>

                </div>

            </div>
        </section>
    )
}