import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ComicSheet from "../Components/ComicSheet";

const FavoritesComics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cookie, setCookie] = useState(Cookies.get("favMarvelComics") || 0);
  const [cookieTab, setCookieTab] = useState();

  useEffect(() => {
    console.log("useEffetc");
    const newCookie = Cookies.get("favMarvelComics");

    console.log("newCookie", newCookie);
    setCookie(newCookie);

    setCookieTab(cookie ? JSON.parse(cookie) : []);

    setIsLoading(false);
  }, [cookie]);

  return (
    <div>
      <p className="page-title">Comics favoris</p>

      <div>
        {isLoading ? (
          <span>Is Loading</span>
        ) : cookieTab ? (
          <div className="main-items">
            {cookieTab.map((elem) => {
              return (
                <ComicSheet
                  title={elem.title}
                  description={elem.describe}
                  picture={elem.picture}
                  id={elem.id}
                  cookie={cookie}
                  setCookie={setCookie}
                />
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default FavoritesComics;
