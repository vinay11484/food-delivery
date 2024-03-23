import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resData, setResData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const Data =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResData(Data);
    console.log(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickEvent = () => {
    const filterRestaurent = resData.filter((result) => {
      return result.info.avgRating >= 4.5;
    });
    setResData(filterRestaurent);
  };

  if (resData.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div>
      <input type="text"></input>
      <button type="button">search</button>
      <button type="button" onClick={clickEvent}>
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {resData.map((resturent) => (
          <RestaurantCard resData={resturent}></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
