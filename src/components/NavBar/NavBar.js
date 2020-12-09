import '../../styles/NavBar.css';
function NavBar(){
    return (
        <>
        
            <div className="menu-container">
            <span className="name">Tiendas Lagm</span>
            <div className="menu">
            <ul>
                <li><a href="#">Relojes</a></li>
                <li><a href="#">Pulsera</a></li>
                <li><a href="#">Carteras</a></li>
                <li><a href="#">Estuches</a></li>
                <li><a href="#">Gafas</a></li>

            </ul>
            </div>      

        </div>
      </>

    )
}

export default NavBar;