import { Link } from "react-router-dom"
import classes from './MainHeader.module.css'

const MainHeader=()=>{
  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
          <li>
            <Link to='/signin'>SignIn</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader