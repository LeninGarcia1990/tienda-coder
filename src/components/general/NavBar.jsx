import { Menu } from 'antd';
import '../../styles/NavBar.css';

import WidgetCard from '../WidgetCard/WidgetCard.jsx';


function NavBar(props) {
    const { titulo } = props;
    return (
        <>

            <div className="menu-container">
                <WidgetCard />
                <span className="name">{titulo}</span>

                <div className="menu">
                    <ul>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <Menu.Item key="1">
                                <a href="/category/relojes">Relojes</a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href="/category/carteras">Carteras</a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href="/category/estuches">Estuches</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/category/gafas">Gafas</a>
                            </Menu.Item>
                        </Menu>

                    </ul>
                </div>

            </div>
        </>

    )
}

export default NavBar;