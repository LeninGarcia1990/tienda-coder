import '../../../styles/NavBar.css';
import WidgetCard from '../../WidgetCard/WidgetCard.jsx';
import NavBarItem from "./NavBarItem/NavBarItem.jsx";
function NavBar(props){
    const {titulo} = props;
    return (
        <>
        
            <div className="menu-container">
            <WidgetCard/> 
            <span className="name">{titulo}</span>
            
            <div className="menu">
            <ul>
                <NavBarItem name="Relojes" url="#list_product"/>
                <NavBarItem name="Pulsera" url="#list_product"/>
                <NavBarItem name="Carteras" url="#list_product"/>
                <NavBarItem name="Estuches" url="#list_product"/>
                <NavBarItem name="Gafas" url="#list_product"/>
            </ul>
            </div>      

        </div>
      </>

    )
}

export default NavBar;