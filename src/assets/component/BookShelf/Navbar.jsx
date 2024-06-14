import { NavLink } from "react-router-dom";
import "../../CSS/Navbar.css"


export default function Navbar(){


    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mybookshelf" >My Bookshelf</NavLink>
        </div>
    )
}