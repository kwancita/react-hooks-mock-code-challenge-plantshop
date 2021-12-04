import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plant, onDelete}) {

  const allPlant = plant.map((myPlant) =>{
    return <PlantCard key={myPlant.id} myPlant={myPlant} onDelete={onDelete}/>
  })

  return (
    <ul className="cards">{allPlant}</ul>
  );
}

export default PlantList;
