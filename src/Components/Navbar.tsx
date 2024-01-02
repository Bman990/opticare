
import { Link } from 'react-router-dom'
import '/StyleSheet/Navbar.css'

export const Navbar: React.FC = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <nav className="navStyle">
            <div className="navCompanyName">
                <button className="btnStyle" onClick={() => scrollToSection('hero')}>OptiCare</button>
            </div>

            <ul className="navUL">

                <li>
                    <button className="btnStyle" onClick={() => scrollToSection('features')}>Features</button>
                </li>

                <li>
                    <button className="btnStyle" onClick={() => scrollToSection('testimonials')}>Testimonals</button>
                </li>

                <li>
                    <Link to='/opticare/contact' className='linkContact'>Consultation</Link>
                </li>
            </ul>
        </nav>
    )
}

