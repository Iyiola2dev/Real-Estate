import React from "react";
import { useState, useEffect, createContext } from "react";

//import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price Range (any)");
  const [loading, setLoading] = useState(false);

  //return all the countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    //remove duplicates countries by using Set
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  //return all the properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove duplicates Properties by using Set
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];

    // set Properties state
    setProperties(uniqueProperties);
  }, []);


  //This is to handle the click event
  const handleClick = ()=>{
    console.log('clicked')
  }
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
