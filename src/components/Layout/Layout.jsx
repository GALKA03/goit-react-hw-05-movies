import {Navigation} from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'

 const Layout = () => {
    return (
        <>
            <header>
                <Navigation/>
        </header>
        <main><Outlet/></main>
        <footer>Footer</footer>
      </>  
    )
}
export default Layout;