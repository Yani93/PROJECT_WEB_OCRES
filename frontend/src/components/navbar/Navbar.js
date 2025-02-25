import "./Navbar.css";
import pinguy from "../../assets/pinguy.png";

const Navbar = ({sidebarOpen, openSidebar})=> {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars"></i>
            </div>
             <div className="navbar__left">
                <a href="#">Résultats</a>
                <a href="#">Videos</a>
                <a className="active-link" href="#">FAQ </a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i class="fa fa-search"></i>
                </a>
                <a href="#">
                    <i class="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img width="60" src={pinguy} alt="pinguy" />
                </a>
            </div>
        </nav>

    );
};

export default Navbar;