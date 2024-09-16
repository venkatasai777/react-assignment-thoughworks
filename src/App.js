import { useCallback, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [inputData, setInputData] = useState("");
  const onChangeSearchInput = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputData;
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data.meals);
    };
    fetchData();
  }, [inputData]);

  return (
    <div className="App">
      <div className="container">
        <h1>
          Hello There! Welcome to{" "}
          <span style={{ color: "red" }}>Meal Finder</span>
        </h1>
        <input
          type="search"
          value={inputData}
          placeholder="Search Meal"
          onChange={onChangeSearchInput}
        />
        <ul className="mealsLists">
          {apiData.map((each) => {
            return (
              <li key={each.idMeal}>
                <img src={each.strMealThumb} alt={each.idMeal} />
                <p>Name :{each.strMeal}</p>
                <p>category: {each.strCategory}</p>
                <p>Area :{each.strArea}</p>
                <a target="_blank" href={each.strYoutube}>
                  Click to watch video
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
