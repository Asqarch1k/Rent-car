import React, { useState } from "react";
import { RentCarBox } from "./ui/rentCarBox";

function Module({ users, changeLiked, isLiked, hideModal, ...props }) {
  // const [data, setData] = useState(CarsInform);

  return (
    <div {...props}>
      {/* <div className="headerModal"c></div> */}
      <div className="boxsModal">
        <div className="secondModalBox">
          {users.map((car) => {
            if (car.isLiked) {
              return (
                <RentCarBox
                  name={car.name}
                  type={car.type}
                  petrol={car.petrol}
                  manual={car.manual}
                  people={car.people}
                  nowPrise={car.nowPrise}
                  oldPrise={car.oldPrise}
                  img={car.img}
                  changeLiked={changeLiked}
                  isLiked={isLiked}
                />
              );
            }
          })}
        </div>

        <span className="xButton" onClick={hideModal}>
          x
        </span>
      </div>
    </div>
  );
}

export default Module;
