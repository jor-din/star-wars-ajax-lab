import { useEffect, useState } from "react";
import { getStarshipsList } from "../services/api-calls";
import { Link } from "react-router-dom";

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipsList();
      setStarships(starshipData.results);
    };
    fetchStarshipList();
  }, []);
  return (
    <>
      <div>
        <h1>Starships List</h1>
        <div className="icon-container">
            {starships.map(starshipTitle => 
                <Link key={starshipTitle.index} state={{ starshipTitle }} to='starship'>
                    <div className="class-div">
                        {starshipTitle.name}
                    </div>
                </Link>    
            )}
        </div>
      </div>
    </>
  );
};

export default StarshipsList;
