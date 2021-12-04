import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plant}) {

  const allPlant = plant.map((myPlant) =>{
    return <PlantCard key={myPlant.id} myPlant={myPlant}/>
  })

  return (
    <ul className="cards">{allPlant}</ul>
  );
}

export default PlantList;
