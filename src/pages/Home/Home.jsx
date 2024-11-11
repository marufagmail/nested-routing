import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import './Home.css'


export default function home() {
  return (
    <div>
        <Header></Header>

        <div className="home">
            <h1>Home</h1>
        </div>

        <div className="container">
            <div className="sideBar">
                <div className="sideBar-menu">
                    <Link to='/mahin' className="sideBar-menu-link">Mahin</Link>
                    <Link to='/rikta' className="sideBar-menu-link">Rikta</Link>
                </div>
                <div className="sideBar-main">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}
