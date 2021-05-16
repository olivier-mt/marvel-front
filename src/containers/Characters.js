import CharacterSheet from "../Components/CharacterSheet";

const Characters = ({ data, setName, skip, setSkip, cookie, setCookie }) => {
  const handleOnClickPlus = () => {
    setSkip(skip + 5);
    // setUrl(baseUrl);
  };

  const handleOnClickMinus = () => {
    setSkip(skip - 5);
  };

  return (
    <div>
      {/* Search bar */}
      <input
        type="search"
        placeholder="Trouver un personnage"
        onChange={(event) => {
          setName(event.target.value);
        }}
        className="SearchBar"
      />
      {/* -------*/}

      <p>characters page</p>
      {/* Change pages */}
      <div className="page-btn">
        {skip && (
          <input type="button" value="<<" onClick={handleOnClickMinus} />
        )}
        <span>{skip / 5}</span>
        {skip + data.limit < data.count && (
          <input type="button" value=">>" onClick={handleOnClickPlus} />
        )}
      </div>
      {/* -------*/}

      {/* MAP ON DATA TO GET ALL CHARACTERS */}
      <div className="main-items">
        {data.results.map((elem, index) => {
          return (
            <CharacterSheet
              key={elem._id}
              name={elem.name}
              description={elem.description}
              picture={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              id={elem._id}
              cookie={cookie}
              setCookie={setCookie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
