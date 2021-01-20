import { useState, useEffect } from 'react';
import ProductsList from '../Product/ProductsList';
import Spinner from '../general/Spinner';
import { getFirestore } from "../../db";

const FeaturedProducts = () => {

    const [fetchProducts, setFetchProducts] = useState([]);
    const db = getFirestore();

    const getProducts = () => {
        db.collection('productos').get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({ id: doc.id, data: doc.data() })
                })
                setFetchProducts(arr)
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
                {fetchProducts.length ?
                    <ProductsList productsList={fetchProducts} productsTitle="Más vendidos" /> : <Spinner />}
            </div>
        </section>
    )
}

export default FeaturedProducts