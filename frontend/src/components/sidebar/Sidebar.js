import"./Sidebar.css";
import logo from "../../assets/terre.jpg";

const Sidebar = ({sidebarOpen, closeSidebar})=> {
    return (
        <div className={sidebarOpen ? "sidebar-responsive": ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                   
                
                </div>
                <i
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={()=>closeSidebar ()}>
            
                 </i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">DASHBOARD</a>
                </div>
                <h2> Welcome to the JUNGLE</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Qui sommes-nous ?</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Nos actions</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Chiffres clés</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">La gouvernance</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Le réglement</a>
                </div>

                <h2> Paysages</h2>

                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Photos</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Vidéo</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Avis des voyageurs</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Autres commentaires</a>
                </div>

                <h2>Nos partenaires</h2>

                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Fifa</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Nike</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-power-off"></i>
                    <a href="#">WWF</a>
                </div>
            </div>
         </div>
    );
    
};

export default Sidebar;