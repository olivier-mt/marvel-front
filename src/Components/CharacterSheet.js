import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { useState, useEffect } from "react";

const CharacterSheet = ({
  name,
  description,
  picture,
  id,
  cookie,
  setCookie,
}) => {
  const [toFav, setToFav] = useState(false);

  useEffect(() => {
    const checkFav = () => {
      const cookieArr = JSON.parse(cookie);

      cookieArr.map((elem) => {
        return elem.id === id && setToFav(true);
      });
    };

    checkFav();
  }, [cookie, id]);

  const handleAddToCookies = () => {
    const newCookie = cookie ? JSON.parse(cookie) : [];
    const character = {
      name: name,
      description: description,
      picture: picture,
      id: id,
    };

    newCookie.push(character);

    //JSON.stringify(newCookie);
    setCookie(JSON.stringify(newCookie));
    console.log(typeof newCookie);
    Cookies.set("marvelFavorites", newCookie);
  };

  return (
    <div className="characterSheet">
      <Link to={`/comics/${id}`}>
        <p>{name}</p>
        <p>{cookie}</p>
        <p>{description}</p>

        <img src={picture} alt="character-picture" />
      </Link>

      {toFav ? (
        <input
          type="button"
          value="retirer des favoris"
          onClick={handleAddToCookies}
        />
      ) : (
        <input
          type="button"
          value="ajouter aux favoris"
          onClick={handleAddToCookies}
        />
      )}
    </div>
  );
};

export default CharacterSheet;
