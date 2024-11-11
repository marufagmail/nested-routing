import { Link } from 'react-router-dom';
import './Header.css';


export default function Header() {
  return (
    <div className="header-area">
        <div className='container'>
            <div className="header">
                <Link to="/">Logo</Link>

                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
        </div>

    </div>
  )
}
