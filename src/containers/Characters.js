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
      {/* Change pages */}
      {skip + data.limit < data.count && (
        <input type="button" value="+" onClick={handleOnClickPlus} />
      )}
      {skip && <input type="button" value="-" onClick={handleOnClickMinus} />}

      {/* -------*/}

      <p>characters page</p>

      {/* Search bar */}
      <form action="">
        <input
          type="search"
          placeholder="Trouver un personnage"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input type="submit" value="X" />
      </form>
      {/* -------*/}

      {/* MAP ON DATA TO GET ALL CHARACTERS */}

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
  );
};

export default Characters;
