import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./containers/Characters";
import Header from "./Components/Header";
import Comics from "./containers/Comics";
import CharComicsList from "./containers/CharComicsList";
import Favorites from "./containers/Favorites";
import FavoritesComics from "./containers/FavoritesComics";
import Cookies from "js-cookie";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState();
  const [skip, setSkip] = useState(0);
  const [cookie, setCookie] = useState(Cookies.get("marvelFavorites" || 0));

  const [url, setUrl] = useState(`http://localhost:3001/characters?`);

  useEffect(() => {
    const baseUrl = name
      ? `http://localhost:3001/characters?skip=${skip}&name=${name}`
      : `http://localhost:3001/characters?skip=${skip}`;

    setUrl(baseUrl);

    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const response = await axios.get(url);

        console.log(response.data);
        console.log("skip", skip);

        setData(response.data);
        setIsLoading(false);
        console.log("feteched !");
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [skip, url, name, cookie]);

  return isLoading ? (
    <span>isLoading</span>
  ) : (
    <Router>
      <Header />
      <Switch>
        <Route path={"/comics/:characterId"}>
          <CharComicsList />
        </Route>

        <Route path={"/comics"}>
          <Comics />
        </Route>

        <Route path={"/favorites"}>
          <Favorites cookie={cookie} setCookie={setCookie} />
        </Route>

        <Route path={"/favoritesComics"}>
          <FavoritesComics />
        </Route>

        <Route path={"/"}>
          <Characters
            data={data}
            setName={setName}
            setData={setData}
            name={name}
            setUrl={setUrl}
            url={url}
            skip={skip}
            setSkip={setSkip}
            cookie={cookie}
            setCookie={setCookie}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
