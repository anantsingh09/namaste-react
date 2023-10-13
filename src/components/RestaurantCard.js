import { RES_CARD_PHOTO } from "../utils/constants";
const RestaurantCard = (props) => {
  const resData = props.resData;
  const { name, cuisines, costForTwo, avgRatingString } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-card"
        src={RES_CARD_PHOTO + resData?.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}</h4>
    </div>
  );
};

export default RestaurantCard;
