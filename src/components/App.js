import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])


  useEffect( () => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {setListings(data)})
    }
    , [])


    function deleteListing(id){
      const updatedList = listings.filter(listing => {
        return listing.id !== id
      })
      setListings(updatedList)

    }


  function handleSubmit(input){
    const updatedList = listings.filter(listing => {
      
      return listing.description.toLowerCase().includes(input.toLowerCase())
      
    })
    setListings(updatedList)
  }


  return (
    <div className="app">
      <Header onSubmit ={handleSubmit}/>
      <ListingsContainer listings = {listings} onDelete = {deleteListing}/>
    </div>
  );
}

export default App;
