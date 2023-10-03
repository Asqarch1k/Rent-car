import { useState } from "react";
import CarsInform from "../../data.js/inform";
import "../../../style/style.css";
import "../../../style/main.css";
import Button from "./button";
const RentCarBox = ({
  name,
  type,
  petrol,
  manual,
  people,
  nowPrise,
  oldPrise,
  img,
}) => {
  const [isLiked, setIsLiked] = useState(true);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const iconClass = isLiked
    ? "fa-regular fa-heart"
    : "fa-solid fa-heart likeIcon";
  return (
    <div className="carsBox">
      <div className="likeIcons">
        <i className={iconClass} onClick={toggleLike}></i>
      </div>
      <h1 className="nameText ">{name}</h1>
      <p className="typeText m-bot-64">{type}</p>
      <img src={img} alt="" className="m-bot-64" />
      <div className="df gap-16 m-bot-24">
        <div className="df gap-6">
          {" "}
          <div>
            <i class="fa-solid fa-gas-pump colors1"></i>
          </div>
          <span className="colors1">{petrol}</span>
        </div>
        <div className="df gap-6">
          {" "}
          <div>
            <i class="fa-solid fa-circle-notch colors1"></i>
          </div>
          <span className="colors1">{manual}</span>
        </div>
        <div className="df gap-6">
          {" "}
          <div>
            <i class="fa-solid fa-user-group colors1"></i>
          </div>
          <span className="colors1">{people}</span>
        </div>
      </div>
      <div className="df gap-6">
        <div>
          <h2 className="nowPrise">
            {nowPrise}{" "}
            <span style={{ color: "#90A3BF", fontSize: "14px" }}>day</span>
          </h2>
          <h3 className="oldPrise">{oldPrise}</h3>
        </div>
        <Button text={"Rent Now"} type={"btn"} />
      </div>
    </div>
  );
};

const RentCars = ({ ...props }) => {
  return (
    <div {...props}>
      {CarsInform.map((Servis, idx) => (
        <RentCarBox key={idx} {...Servis} />
      ))}
    </div>
  );
};

export default RentCars;
