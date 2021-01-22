import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { Store } from '../../store'
import firebase from 'firebase/app'
import { getFirestore } from '../../db'

const Checkout = () => {
    const db = getFirestore();
    const data = useContext(Store);
    const [orderId, setOrderId] = useState('');
    const [successfulSale, setSuccessfulSale] = useState(false);
    const [formOrder, setFormOrder] = useState({
        name: '',
        phone: 0,
        email: ''

    })

    const handleChange = (e) => {
        setFormOrder({ ...formOrder, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('orders').add(purchase)
            .then(({ id }) => {
                setSuccessfulSale(true);
                setOrderId(id);
            })
            .catch(e => console.log(e));
    }

    const purchase = {
        buyer: formOrder,
        items: data.itemsCart.items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: data.itemsCart.totalCart,
    }

    return (
        <section className="section is-medium">
            <div className="container">

                {!successfulSale ?
                    <>
                        <h3 className="title is-uppercase mb-6">Checkout</h3>
                        <div className="columns">

                            <div className="column is-two-thirds">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <div className="field is-grouped">
                                            <div className="control is-expanded">
                                                <label className="label">Name</label>
                                                <input
                                                    className="input"
                                                    name="name"
                                                    value={formOrder.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="field is-grouped">
                                            <div className="control is-expanded">
                                                <label className="label">Phone</label>
                                                <input
                                                    className="input"
                                                    name="phone"
                                                    value={formOrder.phone}
                                                    onChange={handleChange}
                                                    type="number"
                                                    placeholder="phone"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="field is-grouped">
                                            <div className="control is-expanded">
                                                <label className="label">Email</label>
                                                <input
                                                    className="input"
                                                    name="email"
                                                    value={formOrder.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    placeholder="email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <hr />




                                    <hr />

                                    <div className="is-flex is-align-items-center is-justify-content-space-between">
                                        <button type="submit" className="button is-info">Finalizar</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </>
                    :
                    <p>¡Successful purchase! your order number is: {orderId}</p>
                }
            </div>
        </section>
    )
}

export default Checkout