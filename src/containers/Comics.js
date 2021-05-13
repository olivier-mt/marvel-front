import axios from "axios";
import { useState, useEffect } from "react";
import ComicSheet from "../Components/ComicSheet";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/comics");

        setData(response.data);
        setIsLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading ? (
    <span>is Loading</span>
  ) : (
    <div>
      <p>Comics page</p>
      {data.results.map((elem, index) => {
        return (
          <ComicSheet
            title={elem.title}
            picture={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
            key={elem._id}
            description={elem.description}
          />
        );
      })}
    </div>
  );
};

export default Comics;
