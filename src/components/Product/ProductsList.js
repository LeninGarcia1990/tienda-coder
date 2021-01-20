import Product from './Product'

const ProductsList = ({ productsTitle, productsList, productsCategory }) => {

    const productItems = productsCategory ?
        productsList.length > 0 && productsList.filter(product => (product.category === productsCategory)) :
        productsList;

    return (
        <>
            <h3 className="title is-uppercase mb-6">{productsTitle}</h3>
            <div className="columns">
                {productItems.length && productItems.map((product) => {
                    return (
                        <div className="column is-4" key={product.id}>
                            <Product
                                id={product.id}
                                image={product.data.image}
                                title={product.data.title}
                                brand={product.data.brand}
                                price={product.data.price}
                                quantity={product.data.quantity}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default ProductsList
