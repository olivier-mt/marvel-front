import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ComicSheet from "../Components/ComicSheet";
import axios from "axios";

const CharComicsList = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/comics/${characterId}`
      );

      setData(response.data.result);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <span>is Loading</span>
  ) : (
    <div>
      <p>CharComicsList</p>
      <p>{characterId}</p>
      <p>{data.name}</p>
      <div>
        {data.comics.map((elem, index) => {
          return (
            <ComicSheet
              title={elem.title}
              description={elem.description}
              picture={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              key={elem._id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CharComicsList;
