import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../store'
import CartItems from './CartItems'

const Cart = () => {
    const data = useContext(Store);
    return (
        <section className="section is-medium">
            <div className="container">
                <h3 className="title is-uppercase mb-6">Mi Cesta</h3>
                {data.itemsCart.items.length ?
                    <CartItems items={data.itemsCart.items[0].product} /> :
                    <div className="box p-6 mb-6 has-text-centered">
                        <p className="title">No hay articulos</p>
                    </div>
                }
                <Link to="/" className="button is-info is-outlined is-rounded"><span className="icon"><i className="fas fa-arrow-left"></i></span><span>Continuar</span></Link>

                {data.itemsCart.items.length > 0 &&
                    <Link to="/checkout" className="button is-info is-pulled-right is-rounded">Finalizar</Link>
                }
            </div>
        </section>
    )
}

export default Cart