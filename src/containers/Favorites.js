import CharacterSheet from "../Components/CharacterSheet";
import { useState, useEffect } from "react";

const Favorites = ({ cookie, setCookie }) => {
  const Tab = cookie ? cookie.slice() : [];
  const newTab = cookie ? JSON.parse(Tab) : [];

  return (
    <div>
      <p>Favorits</p>

      {newTab.map((elem, index) => {
        return (
          <CharacterSheet
            name={elem.name}
            description={elem.description}
            picture={elem.picture}
            key={index}
            id={elem.id}
            cookie={cookie}
            setCookie={setCookie}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
