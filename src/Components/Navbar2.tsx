import { Link } from "react-router-dom"
import '/StyleSheet/Navbar2.css'
import ArrowLeft from "./ArrowLeft"


export const Navbar2: React.FC = () => {
    return(
        <div className="nav2Div">
            <Link to='/opticare/' className="backHomeLink">
                <ArrowLeft />Back home
            </Link>
        </div>
    )
}