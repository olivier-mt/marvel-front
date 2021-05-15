import CharacterSheet from "../Components/CharacterSheet";
import { useState, useEffect } from "react";

const Favorites = ({ cookie }) => {
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
            key={elem.id}
            id={elem.id}
            cookie={cookie}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
