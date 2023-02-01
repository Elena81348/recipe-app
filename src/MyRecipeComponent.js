function MyRecipeComponent({label,image, calories,ingredients,mealType,cuisineType}){
    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <h3>Cuisine type: {cuisineType}</h3>
        </div>
        <div className="container">
            <img className="tasty" src={image} alt='food'/>
        </div>
        <div className="container">
            <ul className="list">
                {ingredients.map((ingredient,index) => {
                    return<div key={index}>
                    <li >
                        <img src="https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/512/external-check-ui-essential-febrian-hidayat-gradient-febrian-hidayat.png" alt="check" 
                    className="icon"/> {ingredient}</li>
                    </div>
                })}
            </ul>
        </div>
        <div className="container">
            <p className="par"><img src='https://img.icons8.com/cute-clipart/2x/broccoli.png' alt='brocoli'
             className="icon"/> {calories.toFixed()} calories</p>
        </div>
        <div className="container">
             <p className="par" >Meal type: {mealType}</p>
        </div>
        </div>
    )
}
export default MyRecipeComponent;