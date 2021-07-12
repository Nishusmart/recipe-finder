import React from "react";
import './Header.css'
import { useRef, useState } from "react";

const Header =function (){
    const inputFieldRef = useRef();
	const [inputValue, setInputValue] = useState(null);
	const [apidata, setApiData] = useState(null);
  

	const dataMapper = (arr) => {
		arr.map(({ strMeal, idMeal, strInstructions }) => {
			console.log(strMeal, idMeal, strInstructions);
		});
	};
    async function apiHandler() {
		try {
			const apiData = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
				{ method: "GET" }
			);
			const dataJSON = await apiData.json();
			// console.log(dataJSON);
			setApiData(dataJSON?.meals);

			dataMapper(dataJSON?.meals);
		} catch (error) {
			console.log("API failure!");
		}
	}

	const li = apidata?.map((data) => {
		console.log(data);
		return <div>{data?.idMeal}</div>;
	});
    
    return(

    <div className="header">
        <div style={{textAlign:'center',fontFamily:'Maven Pro',position:'relative',bottom:20,right:35,fontWeight:800}}>
        <h1> Recipe Finder</h1></div>
			<header className="App-header">
				{/* Solution for page reload */}
				<form
					onSubmit={(event) => {
						event.preventDefault();

						// Call the state update function to update with a value
						setInputValue(inputFieldRef.current.value);

						apiHandler();
					}}
				>
					<input id="finder"
						type="text"
						placeholder="Enter the name of the dish"
						ref={inputFieldRef}
					/>
					<button id="btn" type="submit">Get ingredients</button>
				</form>

				{li}
			</header>
		</div>
	);
}

export default Header;
