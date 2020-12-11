import '../../styles/Card.css';
const Card = ({name,image}) => (

        <section className="Card">
            <img src={image} alt="recurente"/>
            <h2>{name}</h2>
        </section>

    );

export default Card;