import '../../styles/Item.css';
import ItenCount from '../ItemCount/ItemCount';
export default function Card (props)  {

    const {name,image,stop,initial} = props;

    return (
        <section className="Card">
            <img src={image} alt="recurente"/>
            <h2>{name}</h2>
            <h2>Stop: {stop}</h2>
            <div>
            <ItenCount stop={stop} initial= {initial}  />
            </div>
        </section>

    );

}

