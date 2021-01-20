import { useState, useEffect } from 'react';
import ProductsList from '../Product/ProductsList';
import Spinner from '../general/Spinner';
import { useParams } from 'react-router-dom'
import { getFirestore } from "../../db";



const Category = () => {

    const { category_name } = useParams();
    const [fetchProducts, setFetchProducts] = useState([]);

    const db = getFirestore();

    const getProducts = () => {
        db.collection('productos').where("category", "==", category_name).get()
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
                    <ProductsList productsList={fetchProducts} productsTitle={category_name} /> : <Spinner />}
            </div>
        </section>
    )

}

export default Category