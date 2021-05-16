import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const ComicSheet = ({ title, description, picture, id, cookie, setCookie }) => {
  const [toFav, setToFav] = useState(false);

  console.log("cookie", cookie);

  useEffect(() => {
    const checkFavstatus = () => {
      const cookieTab = cookie ? JSON.parse(cookie) : [];

      cookieTab.map((elem) => {
        elem.id === id && setToFav(true);
      });
    };
    checkFavstatus();
  }, [cookie, toFav, id]);

  const addToCookies = () => {
    if (cookie) {
      console.log("cookie !!");
      const newCookie = JSON.parse(cookie);

      console.log(typeof cookie);

      newCookie.push({
        title: title,
        description: description,
        picture: picture,
        id: id,
      });

      Cookies.set("favMarvelComics", newCookie);

      setCookie(JSON.stringify(newCookie));
    } else {
      const newCookie = [
        { title: title, description: description, picture: picture, id: id },
      ];

      Cookies.set("favMarvelComics", newCookie);

      setCookie(JSON.stringify(newCookie));
    }
  };

  const removeFromCookie = () => {
    const cookieTab = JSON.parse(cookie);

    const newCookie = [...cookieTab];

    cookieTab.map((elem, index) => {
      elem.id === id && newCookie.splice(index, 1);
    });

    Cookies.set("favMarvelComics", newCookie);
    setToFav(false);

    setCookie(JSON.stringify(newCookie));
  };

  return (
    <div className="characterSheet">
      {toFav ? (
        <input
          type="button"
          value="Retirer des favoris"
          onClick={removeFromCookie}
          className="remove"
        />
      ) : (
        <input
          type="button"
          value="Ajouter aux favoris"
          onClick={addToCookies}
          className="add"
        />
      )}
      <p>{title}</p>
      <img src={picture} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default ComicSheet;
