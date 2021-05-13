const ComicSheet = ({ title, description, picture, key }) => {
  return (
    <div className="comicSheet">
      <p>{title}</p>
      <img src={picture} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default ComicSheet;
