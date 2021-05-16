import axios from "axios";
import { useState, useEffect } from "react";
import ComicSheet from "../Components/ComicSheet";
import Cookies from "js-cookie";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [url, setUrl] = useState("http://localhost:3001/comics?");
  const [skip, setSkip] = useState(0);
  const [title, setTitle] = useState();
  const [cookie, setCookie] = useState(Cookies.get("favMarvelComics") || 0);

  const handleOnSearch = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    const newUrl = title
      ? `http://localhost:3001/comics?skip=${skip}&title=${title}`
      : `http://localhost:3001/comics?skip=${skip}`;

    setUrl(newUrl);
    try {
      const fetchData = async () => {
        const response = await axios.get(url);

        setData(response.data);
        console.log("new letter");
        setIsLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [url, title, skip, cookie]);

  return isLoading ? (
    <span>is Loading</span>
  ) : (
    <div>
      {/*Search Bar*/}

      <input
        type="search"
        placeholder="Trouver un Comic"
        onChange={handleOnSearch}
        className="SearchBar"
      />

      {/*---*/}
      <p className="page-title">COMICS</p>

      {/*Page buttons*/}
      <div className="page-btn">
        {skip && (
          <input
            type="button"
            value="<<"
            onClick={() => {
              setSkip(skip - data.limit);
            }}
          />
        )}

        {skip + data.limit < data.count && (
          <input
            type="button"
            value=">>"
            onClick={() => {
              setSkip(skip + data.limit);
            }}
          />
        )}
      </div>
      {/*---*/}

      <div className="main-items">
        {data.results.map((elem, index) => {
          return (
            <ComicSheet
              title={elem.title}
              picture={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              key={elem._id}
              id={elem._id}
              description={elem.description}
              cookie={cookie}
              setCookie={setCookie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
