import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='div__brand'>
                <h3>BRAND</h3>
            </div>
            <div className='links__navbar'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/form'>Register</Link>
                <Link to='/groups'>Groups</Link>
            </div>
        </div>
    )
}

export default Navbar