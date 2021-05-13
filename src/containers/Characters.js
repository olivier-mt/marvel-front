import CharacterSheet from "../Components/CharacterSheet";

const Characters = ({ data }) => {
  return (
    <div>
      <p>characters page</p>
      {data.map((elem, index) => {
        return (
          <CharacterSheet
            name={elem.name}
            description={elem.description}
            picture={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
            id={elem._id}
          />
        );
      })}
    </div>
  );
};

export default Characters;
