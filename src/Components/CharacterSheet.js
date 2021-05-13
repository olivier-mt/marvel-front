import { Link } from "react-router-dom";

const CharacterSheet = ({ name, description, picture, id }) => {
  return (
    <Link to={`/comics/${id}`}>
      <div className="characterSheet">
        <p>{name}</p>
        <p>{description}</p>
        <img src={picture} alt="character-picture" />
      </div>
    </Link>
  );
};

export default CharacterSheet;
