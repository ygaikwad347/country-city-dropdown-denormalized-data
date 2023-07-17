import { useState } from "react";

export default function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const countryOptions = [
    {
      value: "usa",
      label: "USA",
      city: [
        { value: "newyork", label: "New York" },
        { value: "losangeles", label: "Los Angeles" },
        { value: "chicago", label: "Chicago" }
      ]
    },

    {
      value: "canada",
      label: "Canada",
      city: [
        { value: "toronto", label: "Toronto" },
        { value: "vancouver", label: "Vancouver" },
        { value: "montreal", label: "Montreal" }
      ]
    },
    {
      value: "uk",
      label: "UK",
      city: [
        { value: "london", label: "London" },
        { value: "manchester", label: "Manchester" },
        { value: "edinburgh", label: "Edinburgh" }
      ]
    }
  ];

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity("");
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const countryDropDown = countryOptions.map((el) => {
    return <option key={el.label}>{el.value}</option>;
  });

  const cityDropDown = countryOptions.map((el) => {
    if (el.value === country) {
      const cities = el.city.map((el) => {
        return <option key={el.label}>{el.value}</option>;
      });
      return cities;
    }
    return [];
  });

  return (
    <div>
      <label>Select country : </label>
      <select onChange={handleCountryChange}>
        <option>Select a country</option>
        {countryDropDown}
      </select>

      <label>Select city</label>
      <select onChange={handleCityChange}>
        <option>Select a country</option>
        {cityDropDown}
      </select>

      {country && city && (
        <p>
          You selected country : {country} and city : {city}
        </p>
      )}
    </div>
  );
}
