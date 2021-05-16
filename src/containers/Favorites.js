import CharacterSheet from "../Components/CharacterSheet";

const Favorites = ({ cookie, setCookie }) => {
  const Tab = cookie ? cookie.slice() : [];
  const newTab = cookie ? JSON.parse(Tab) : [];

  return (
    <div>
      <p className="page-title">Personnages favoris</p>

      <div className="main-items">
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
    </div>
  );
};

export default Favorites;
