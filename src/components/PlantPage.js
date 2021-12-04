import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plant, setPlant] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlant(data))
  },[])

  function handleSubmit(newPlant){
    setPlant([...plant, newPlant])
  }

  function handleDelete(deletePlant){
    //console.log("deleted")
    const updatedPlant = plant.filter(p => p.id !== deletePlant.id )
    setPlant(updatedPlant)
  }

  const displayPlant = plant.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <NewPlantForm onFormSubmit={handleSubmit}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plant={displayPlant} onDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
