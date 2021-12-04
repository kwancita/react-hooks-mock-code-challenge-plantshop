import React, {useState} from "react";

function NewPlantForm({onFormSubmit}){

  const [name, setname] = useState("")
  const [img, setImg] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      name:name,
      image:img,
      price:price
    }
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => onFormSubmit(data))

    setname("")
    setImg("")
    setPrice("")
  }

  return (
    <div className="new-plant-form" >
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={img} onChange={(e)=>setImg(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;


