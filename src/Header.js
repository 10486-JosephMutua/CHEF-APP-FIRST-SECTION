import React from "react";
export default function Header(){
const [favourite,setfavourite]= React.useState([])

const things=favourite.map((food) => {
return (
<li>{food}</li>

)
}
)


   function handleSubmit(event){
 event.preventDefault()
 const formData = new FormData(event.currentTarget)
 const newIgredient = formData.get("ingredient")
formData.reset()
 setfavourite(prevLunch => [...prevLunch, newIgredient])
 }

// function handleSubmit(event) {
//   event.preventDefault()
//   const formData = new FormData(event.currentTarget)
//   const newIngredient = formData.get("ingredient")
// setfavourite(prevLunch => [...prevLunch, newIngredient])
// }


  
return(
  <>
  
<div className="container">
<main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {things}
            </ul>
        </main>
        </div>
</>
)

}