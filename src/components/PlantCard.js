import React, {useState} from "react";

function PlantCard({myPlant}) {

  const [click, setClick] = useState(false)
  const {name, image, price} =  myPlant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {click ? (
        <button className="primary" onClick={()=>setClick(!click)}>In Stock</button>
      ) : (
        <button onClick={()=>setClick(!click)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
