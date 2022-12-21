import { NavLink } from "react-router-dom"
import styles from "components/Navigation/Navigation.module.css"
export const Navigation = () => {
let activeStyle = {
    textDecoration: "undeline",
    color: "brown",
    fontSize: '30',

  };

    return (
        <nav>
        <ul className={styles.listLink}>
                <li><NavLink
                to='/' end
                style={({ isActive }) =>isActive ? activeStyle : undefined}
                className={styles.link}
                >Movies</NavLink></li>
                {/* <li><NavLink 
                    to='/movie'
                    style={({ isActive }) =>isActive ? activeStyle : undefined} 
                className={styles.link}

    >Movies</NavLink></li>*/}
                <li>  
                    <NavLink to='/search'
                     style={({ isActive }) =>isActive ? activeStyle : undefined} 
                className={styles.link}
                    >
                        Serch
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}