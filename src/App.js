import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./containers/Characters";
import Header from "./containers/Header";
import Comics from "./containers/Comics";
import CharComicsList from "./containers/CharComicsList";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/characters");

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

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

        <Route path={"/"}>
          <Characters data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
