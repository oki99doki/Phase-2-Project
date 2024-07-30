import { useEffect, useState } from "react";
import Header from "./Header";
import FavoriteForm from "./FavoriteForm";
import NewDestination from "./NewDestination";
import CityList from "./CityList";

function HomePage() {

const [destinations, setDestination] = useState([])

useEffect(() => {
    fetch('http://localhost:4000/places')
    .then(res => res.json())
    .then(data => setDestination(data))
  }, [])

return (
  <>
  <header>
  <Header />
  </header>
  
  <h1> HomePage </h1>

  <div>
  <FavoriteForm /> 
  {/* <NewDestinationForm addPlaces={addPlaces} /> */}
  </div>

  {
  destinations.map(destination => <CityList key={destination.id} destination={destination} />)
  }
  
  </>

)
}

export default HomePage;