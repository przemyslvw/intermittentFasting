import {Link} from 'react-router'
import Home from 'react-icons/lib/fa/home'
import AddList from 'react-icons/lib/fa/calendar-plus-o'
import List from 'react-icons/lib/fa/table'
export const Menu = () =>
        <nav className="menu">
            <Link to="/" activeClassName="selected">
            <Home/>
            </Link>
            <Link to="/add-day" activeClassName="selected">
            <AddList/>
            </Link>
            <Link to="/list-day" activeClassName="selected">
            <List/>
            </Link>
        </nav>