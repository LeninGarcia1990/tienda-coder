import CartItem from './CartItem'

const CartItems = ({ items }) => {
    return (
        <div className="table-container">
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>



                    {items.length && items.map((product) => {
                        return (
                            <tr key={product.id}>

                                <CartItem
                                    id={product.id}
                                    image={product.data.image}
                                    title={product.data.title}
                                    brand={product.data.brand}
                                    price={product.data.price}
                                    quantity={product.data.quantity}
                                />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CartItems
