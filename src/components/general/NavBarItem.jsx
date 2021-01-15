import { Link } from  'react-router-dom';
const NavBarItem = ({name,url}) => (
    
        <li>
        <Link to={url}>{name}</Link>
        </li>
    
)
export default NavBarItem;