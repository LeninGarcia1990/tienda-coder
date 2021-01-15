import { useState, useEffect } from 'react';
import { products } from "../../constant/products";
import ProductsList from '../Product/ProductsList';
import Loading from '../Loading/Loading';

const FeaturedProducts = () => {

    const [fetchProducts, setFetchProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })

    useEffect(() => {
        getProducts.then(rta => setFetchProducts(rta));
    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
                {fetchProducts.length ?
                    <ProductsList productsList={fetchProducts} productsTitle="Nuevos" /> : <Loading />}
            </div>
        </section>
    )
}

export default FeaturedProducts