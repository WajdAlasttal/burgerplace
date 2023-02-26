// import dishes from "./data";
import React, { useState } from "react";
import data from "./data";
import Dishes from "./Components/Dishes";
import Price from "./Components/Price";
import Category from "./Components/Category";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

function App() {
	const[min,setMin]=useState(4);
    const[max,setMax]=useState(4);
	const [category,setCat]=useState("all");
	//  dish.price >= min && dish.price <= max
	const filteredDishes=data.filter((dish )=>{
		if(category === 'all'){
		 return dish.price >= min && dish.price <= max
		}else{
			return dish.price >= min && dish.price <= max &&
			dish.category === category
		}
	})
	console.log(filteredDishes)
	
	
	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<h2>Filters</h2>
				<Price min={min}
				max={max} 
				setMax={setMax}
				setMin={setMin}
				/>
				<Category
				Category={category}
				setCat={setCat}/>
				
			</section>
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">
					{filteredDishes.map((elem)=>{
						return(
						<li className="card" key={elem.id}>
							<Dishes title={elem.name} dishDesc={elem.description} price={elem.price} />
							</li>
						)
						
					})}
				</ul>
			</section>
		</main>
	);
}

export default App;
