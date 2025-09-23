import './CharacterCard.css';
function CharacterCard({ character }) {
    const { name, image, location, gender, status, species } = character;
    return (

        <article className='character-card'>
            <h3>{name}</h3>
            <img src={image} alt={name} width="80" />
            <ul>
                <li>{location.name}</li>
                <li>{gender}</li>
                <li>{status}</li>
                <li>{species}</li>

            </ul>
        </article>

    );
}
export default CharacterCard;