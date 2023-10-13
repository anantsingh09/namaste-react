import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfRestaurantsCopy, setListOfRestaurantsCopy] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getListOfRestaurants();
  }, []);

  const getListOfRestaurants = async () => {
    const response = await fetch(SWIGGY_URL);
    const json = await response.json();
    setListOfRestaurants(
      json.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurantsCopy(
      json.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };

  const searchRestaurants = () => {
    const list = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setListOfRestaurantsCopy(list);
  };

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filters">
        <input
          value={filterText}
          type="text"
          onChange={(e) => {
            handleInputChange(e);
          }}
        ></input>
        <button
          onClick={() => {
            searchRestaurants();
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info?.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurantsCopy.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info?.name}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
