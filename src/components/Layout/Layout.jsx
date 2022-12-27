import {Navigation} from '../Navigation/Navigation'
import { Link, Outlet } from 'react-router-dom'
import styles from 'components/Layout/Layout.module.css'
// import { BsLinkedin} from "@react-icons/all-files/fa/BsLinkedin"
//import { AiOutlineLinkedin } from "react-icons/fa/AiOutlineLinkedin"
import {RiSendPlaneFill,RiLinkedinBoxLine,RiFacebookCircleLine} from "react-icons/ri";

const Layout = () => {
    return (
        <div className={styles.conteiner}>
            <header className={styles.header}>
                <Navigation/>
        </header>
        <main><Outlet/></main>
        <footer className={styles.footer}>
          <div className={styles.conteinerInfo}>
          <h2 className={styles.titleInfo}>MOVIES</h2>
          <p className={styles.textInfo}>Made by Galya Matviienko
          <br className={styles.br}/>  For good mood and fun time behavior</p>  
        </div>
          <div className={styles.conteinerInfo}>
            <h2 className={styles.titleInfo} >My contacts</h2>
            <ul className={styles.list}>
              <li className={styles.item}><Link className={styles.link} href='https://github.com/GALKA03/'><RiSendPlaneFill /></Link> </li> 
               <li className={styles.item}> <Link className={styles.link} href='https://www.linkedin.com/feed/?trk=onboarding-landing'><RiLinkedinBoxLine/></Link></li> 
             <li className={styles.item}> <Link className={styles.link} href='https://www.facebook.com/profile.php?id=100082452673470'><RiFacebookCircleLine/></Link></li>             
          </ul>

            
          </div>
        </footer>
      </div>  
    )
}
export default Layout;