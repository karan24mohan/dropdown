import React, { useState } from "react";

function App() {
  const countries = [
    { name: "India", id: 91 },
    { name: "Turkey", id: 90 },
    { name: "USA", id: 1 },
  ];

  const cities = [
    { name: "Istandbul", id: 90 },
    { name: "Rize", id: 90 },
    { name: "Hyderabad", id: 91 },
    { name: "Bengaluru", id: 91 },
    { name: "New York", id: 1 },
    { name: "Los Angeles", id: 1 },
  ];

  const [city, setCity] = useState([]);

  const handleChange = (e) => {
    const countryName = e.target.value;
    const countryId = countries.filter((item) => item.name === countryName);
    setCity(cities.filter((item) => item.id === countryId[0].id));
  };
  return (
    <div className="App">
      <select name="countries" id="countries" onChange={handleChange}>
        <option disabled selected>
          {" "}
          Select Country{" "}
        </option>{" "}
        {countries.map((item) => {
          return (
            <option value={item.name} key={item.id}>
              {" "}
              {item.name}{" "}
            </option>
          );
        })}{" "}
      </select>{" "}
      <select name="cities" id="cities">
        <option value="Select City"> Select City </option>{" "}
        {city.map((item, index) => {
          return (
            <option value={item.name} key={index}>
              {" "}
              {item.name}{" "}
            </option>
          );
        })}{" "}
      </select>{" "}
    </div>
  );
}

export default App;
