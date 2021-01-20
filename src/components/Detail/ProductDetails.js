import { useContext } from 'react'
import { useState } from 'react'
import { Store } from '../../store'
import { useHistory } from "react-router-dom"
import ProductCount from "../Product/ProductCount"
import ProductsList from '../Product/ProductsList'

const ProductDetail = ({ product }) => {
    const data = useContext(Store);

    const [showWidgetCart, setShowWidgetCart] = useState(false);

    //let history = useHistory();

    const onAddItem = (id) => {
        data.itemsCart.items.filter(item => item.product.id === id).length === 0 ?

            data.setItemsCart({
                ...data.itemsCart,
                items: [...data.itemsCart.items, { product, quantity: data.itemsCart.count }],
                totalCart: data.itemsCart.totalCart + data.itemsCart.count,
                count: 1,
            }) :
            isInCart(id);

        setShowWidgetCart(!showWidgetCart);
        //history.push("/cart");
    }

    const isInCart = (id) => {
        const index = data.itemsCart.items.findIndex(find => find.product[0].id === id);
        const newItemsCart = data.itemsCart.items;
        newItemsCart[index] = { ...newItemsCart[index], quantity: newItemsCart[index].quantity + data.itemsCart.count }
        data.setItemsCart({
            ...data.itemsCart,
            items: newItemsCart,
            totalCart: data.itemsCart.totalCart + data.itemsCart.count
        })
    }

    let button;
    if (product[0].data.quantity > 0) {
        button = <button onClick={() => onAddItem(product[0].id)} className="button is-info">
            <span className="icon">
                <i className="fas fa-shopping-cart"></i>
            </span><span>Agregar al Carrito</span></button>;
    } else {
        button = <p className="card-footer-item">Out of stock</p>;
    }


    return (

        <article className="columns is-align-items-center container">
            <div className="column is-half">
                <figure className="image is-animated">
                    <img src={product[0].data.image} alt={product[0].data.title} />
                </figure >
            </div>
            <div className="column pr-6 ">
                <h1 className="title">{product[0].data.title}</h1>
                <h3 class="subtitle">{product[0].data.brand}</h3>
                <p className="mb-5">{product[0].data.descripcion}</p>
                <p className="title"><strong>{product[0].data.price}</strong></p>
                <div className="columns mb-5 is-align-items-center">
                    <div className="column">
                        <ProductCount stock={product[0].data.quantity} />
                    </div>
                    <div className="column">
                        {button}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductDetail
