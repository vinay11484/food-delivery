import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const restaurant = props.resData?.info;
  console.log(restaurant);
  return (
    <div className="res-card">
      <img
        className="item-logo"
        src={CDN_URL + restaurant?.cloudinaryImageId}
      />
      <h4>{restaurant.name}</h4>
      <h5>{restaurant.cuisines}</h5>
      <h5>{restaurant.avgRating}</h5>
      <h5>{restaurant?.sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
