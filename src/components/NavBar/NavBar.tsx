// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from '../../assets/logo.svg'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="Meow Meow Bean" />
      </NavLink>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">PROFILES</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/login">LOGIN</NavLink></li>
          <li><NavLink to="/signup">SIGN UP</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
