import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/api-calls";

const StarshipDetails = () => {
    const [starshipDetails, setStarshipDetails] = useState({})
    const location = useLocation()
  
    useEffect(() => {
      const fetchDetails = async () => {
        const starshipDetails = await getDetails(location.state.starshipTitle.url)
        setStarshipDetails(starshipDetails)
      }
      fetchDetails()
    }, [location.state.starshipTitle.url])
  
    return ( 
      <>
        <div>
            {starshipDetails.name ?
            <>
            <h2>Name: {starshipDetails.name}</h2>
            <h2>Model: {starshipDetails.model}</h2>
            <Link to="/starship-list">Return</Link>
            </>
            : <>
                <p>Loading...</p>
            </>
        } 
        </div>
      </>
    );
  }
  
  export default StarshipDetails;