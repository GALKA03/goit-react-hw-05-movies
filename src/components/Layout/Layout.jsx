import {Navigation} from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import styles from 'components/Layout/Layout.module.css'
//import { BsLinkedin} from "@react-icons/all-files/fa/BsLinkedin";;
const Layout = () => {
    return (
        <div className={styles.conteiner}>
            <header className={styles.header}>
                <Navigation/>
        </header>
        <main><Outlet/></main>
        <footer className={styles.footer}>
          <div>
          <h1>MOVIES</h1>
          <p>Made by Galya Matviienko
          <br />  For good mood and fun time behavior</p>  
        </div>
          <div>
            <h2>My contacts</h2>
            <ul>
              {/* <li>{BsLinkedin}</li> */}
              <li></li>
              <li></li>
              <li></li>
          </ul>

            
          </div>
        </footer>
      </div>  
    )
}
export default Layout;