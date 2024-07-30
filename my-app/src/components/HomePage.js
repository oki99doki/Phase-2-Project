import { useEffect, useState } from "react";
import Header from "./Header";
import FavoriteForm from "./FavoriteForm";
import NewDestination from "./NewDestination";
import CityList from "./CityList";
import Search from "./Search";

function HomePage() {
  const [destinations, setDestination] = useState([]);
  //const [searchDestination, setSearch] = useState("")
  const [search, setSearch] = useState("");

useEffect(() => {
    fetch('http://localhost:4000/places')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
         throw Error ('Could not fetch the data from promise')
      }
    })
    .then(data => setDestination(data))
    .catch(err => console.error('Was unable to reach the server for GET Request'))
  }, [])


  // const addPlaces = (newPlaces) => {
  //   setSearchplaces([...destinations, newPlaces])
  // };

  const addDestination = (newDestination) => {
    setDestination([...destinations, newDestination])
  }

  const updateSearch = (newSearch) => setSearch(newSearch);

  const filteredDestinations = destinations.filter((curDestination) => {

    console.log(curDestination)
    
    return (
      curDestination["city-name"].toLowerCase().includes(search.toLowerCase()) ||
      curDestination["country-name"].toLowerCase().includes(search.toLowerCase())
    );

  });

  function updateFavorite(updatedDestination) {
    setDestination(destinations.map(prevDestination => {
      if (updatedDestination.id === prevDestination.id) {
        return { ...prevDestination, favorite: updatedDestination.favorite };
      } else {
        return prevDestination;
      }
    }));
  }


return (
  <>
  <div>
    <header>
      <Header />
    </header>

    <div>
    <h1> HomePage </h1>
      <Search search={search} updateSearch={updateSearch} />
      <FavoriteForm />
      <NewDestination addDestination={addDestination} />

      {filteredDestinations.map((destination) => (
        <CityList key={destination.id} destination={destination} />
      ))}

    </div>
  </div>

  {
  destinations.map(destination => <CityList key={destination.id} destination={destination} updateFavorite={updateFavorite} />)
  }
  
  </>

)
}

export default HomePage;
