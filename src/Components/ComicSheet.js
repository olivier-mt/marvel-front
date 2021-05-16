import Cookies, { set } from "js-cookie";
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
  }, [cookie, toFav]);

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

    setCookie(JSON.stringify(newCookie));
    setToFav(false);
  };

  return (
    <div className="comicSheet">
      {toFav ? (
        <input
          type="button"
          value="Retirer des favoris"
          onClick={removeFromCookie}
        />
      ) : (
        <input
          type="button"
          value="Ajouter aux favoris"
          onClick={addToCookies}
        />
      )}
      <p>{title}</p>
      <p>{toFav && "TO FAVV !!!"}</p>
      <p>{Cookies.get("favMarvelComics")}</p>
      <img src={picture} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default ComicSheet;
