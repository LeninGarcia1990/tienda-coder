import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../general/Spinner'
import ProductDetail from './ProductDetails'
import { getFirestore } from '../../db'

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestore();


    useEffect(() => {
        db.collection('productos').doc(id).get()
            .then(doc => {
                let arr = [];
                if (doc.exists) {
                    arr.push({ id: doc.id, data: doc.data() })
                    setProduct(arr)

                }
            })
            .catch(e => console.log(e));

    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
                {product ? <ProductDetail product={product} /> : <Spinner />}
            </div>
        </section>
    )
}
export default Detail;