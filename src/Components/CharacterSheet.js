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
  }, [cookie, id, toFav]);

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

  const handleRemoveFromCookies = () => {
    const newCookie = JSON.parse(cookie);

    newCookie.map((elem, index) => {
      if (elem.id === id) {
        return newCookie.splice(index, 1);
      }
    });

    setCookie(JSON.stringify(newCookie));
    Cookies.set("marvelFavorites", newCookie);
    setToFav(false);
  };

  return (
    <div className="characterSheet" id={id}>
      {toFav ? (
        <input
          type="button"
          value="retirer des favoris"
          onClick={handleRemoveFromCookies}
          className="remove"
        />
      ) : (
        <input
          type="button"
          value="ajouter aux favoris"
          onClick={handleAddToCookies}
          className="add"
        />
      )}

      <Link to={`/comics/${id}`}>
        <p>{name}</p>
        <img src={picture} alt="character-picture" />

        <p>{description}</p>
      </Link>
    </div>
  );
};

export default CharacterSheet;
