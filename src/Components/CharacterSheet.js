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
  key,
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
        newCookie.splice(index, 1);
      }
    });

    setCookie(JSON.stringify(newCookie));
    Cookies.set("marvelFavorites", newCookie);
    setToFav(false);
  };

  return (
    <div className="characterSheet" key={key} id={id}>
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
          onClick={handleRemoveFromCookies}
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
