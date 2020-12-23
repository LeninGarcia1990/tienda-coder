import {useState, useEffect} from 'react';
import Item from '../Item/Item';
export default function ItemList(props){
    const [items, setItems] = useState([]);
    const products = [
        {
            id: 1,
            titulo: 'RELOJ CURREN REF: 235',
            stop: 20,
            initial:1,
            image:"https://cdn.shopify.com/s/files/1/0347/2280/7941/products/e424b50b-926a-4a16-ab56-9c8f3e67c13f_600x.jpg?v=1584829003"

        },
        {
            id: 2,
            titulo: 'RELOJ XINEW REF. 245',
            stop: 15,
            initial:2,
            image:"https://cdn.shopify.com/s/files/1/0347/2280/7941/products/WhatsAppImage2020-08-11at18.50.33_400x.jpg?v=1597189961"
        },
        {
            id: 3,
            titulo: 'RELOJ CURREN REF: 242',
            stop: 0,
            initial:0,
            image:"https://cdn.shopify.com/s/files/1/0347/2280/7941/products/WhatsAppImage2020-03-30at12.57.52AM_400x.jpg?v=1585547932"
        },
        {
            id: 4,
            titulo: 'RELOJ CURREN REF: 388',
            stop: 50,
            initial:5,
            image:"https://cdn.shopify.com/s/files/1/0347/2280/7941/products/image_0a7267d9-ebc6-434f-8fdb-72eddbcb56f7_400x.jpg?v=1591470906"
        },
        {
            id: 5,
            titulo: 'RELOJ HANNAH MARTIN REF. 383',
            stop: 10,
            initial:1,
            image:"https://cdn.shopify.com/s/files/1/0347/2280/7941/products/IMG_9694_400x.jpg?v=1585799381"
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
    }, [])




    return (
        <>
        
        {
                    items.length ?
                    <>
                        <h2>Relojes</h2>

                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <Item 
                                        name={item.name}
                                        image={item.image}
                                        stop={item.stop}
                                        initial={item.initial}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando items...</p>
                }

        </>
      );

}