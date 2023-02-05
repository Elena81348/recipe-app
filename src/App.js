
import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4'
import MyRecipeComponent from './MyRecipeComponent';


function App() {
  const MY_ID = "397f6f4d";
  const MY_KEY ="40714da55bbb1e6e6fc5c9e642eaf196";

  const [mySearch,setMySearch]=useState(``);
  const [myRecipes, setMyRecipes]=useState([]);
  const [wordSubmittet,setWordSubmittet]=useState('avocado')

  useEffect( () =>{
    const myRecipes=async()=>{
    const responce=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmittet}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data= await responce.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
    }
    myRecipes()
  },[wordSubmittet])

  const myRecipeSearch=(e)=>{
    console.log(e.target.value)
    setMySearch(e.target.value)
  }
  const finalSearch=(e)=>{
    e.preventDefault();
    setWordSubmittet(mySearch)
  }


  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
          <div className='container'>
            <button>
              <img src='https://img.icons8.com/fluency/2x/fry.png' width='40px' alt='icons'/>
            </button>
          </div>
        </form>
      </div>

      
      {myRecipes.map((element,index)=>(
        <MyRecipeComponent key={index}  label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        mealType={element.recipe.mealType}
        cuisineType={element.recipe.cuisineType}/>
      ))}
    </div>
  );
}

export default App;
