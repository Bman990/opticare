
import '/StyleSheet/Navbar.css'

export const Navbar: React.FC = () => {
    return(
        <nav className="navStyle">
            <div className="navCompanyName">
                <h1>OptiCare</h1>
            </div>

            <ul className="navUL">

                <li>
                    <h1>What we do</h1>
                </li>

                <li>
                    <h1>Pricing</h1>
                </li>

                <li>
                    <h1>Contact Us</h1>
                </li>
            </ul>
        </nav>
    )
}

