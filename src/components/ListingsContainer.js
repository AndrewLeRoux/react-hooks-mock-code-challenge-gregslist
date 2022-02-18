import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({onDelete, listings}) {

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
      return <ListingCard onDelete={onDelete} key ={listing.id} listing={listing}></ListingCard>
    })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
