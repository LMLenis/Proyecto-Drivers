import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo F1.png'
import './navbar.css'

const Navbar = () =>{
    const location = useLocation();

   return(
      <nav className='navbar-cont'>
        <div className = 'navbar-img-cont'>
          <img src={logo} alt=''/>
        </div>
        {
            location.pathname !=='/home'&&
            <div className='navbar-links-cont'><Link to='/home' >HOME</Link></div>
        }
        {
            location.pathname !=='/form'&&
            <div className='navbar-links-cont'><Link to='/form' >CREATE DRIVER</Link></div>
        }
        </nav>
  )
}
    

export default Navbar;