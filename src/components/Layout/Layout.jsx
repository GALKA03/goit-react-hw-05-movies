import {Navigation} from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import styles from 'components/Layout/Layout.module.css'
 const Layout = () => {
    return (
        <div className={styles.conteiner}>
            <header className={styles.header}>
                <Navigation/>
        </header>
        <main><Outlet/></main>
        <footer>Footer</footer>
      </div>  
    )
}
export default Layout;