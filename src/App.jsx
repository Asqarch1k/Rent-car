import { useState } from "react";
import Button from "./components/ui/button";
import profilFotos from "../images/profilFoto.svg";
import whiteCar from "../images/image 7.png";
import whiteCar1 from "../images/image 8.png";
import RentCars from "./components/ui/rentCarBox";
import Module from "./components/modals";
import Sidebar from "./components/search";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Module hideModal={hideModal} className="modalCard wrapper" />
      )}
      <div className="wraperr">
        <div className="container">
          <div className="header df jc-sb">
            <div className="df gap-64 headerLogos">
              <h1 className="headerLogo">MORENT</h1>
              <div className="df inputValue">
                <i class="fa-solid fa-magnifying-glass searchIcon"></i>
                <input type="text" placeholder="Search something here" />
                <i class="fa-solid fa-sliders searchIcon"></i>
              </div>
            </div>

            <div className="df gap-20">
              <button className="likeBtn" onClick={() => setShowModal(true)}>
                <i class="fa-solid fa-heart likeBtnColor"></i>
              </button>
              <button className="likeBtn">
                <i class="fa-solid fa-bell likeBtnColor"></i>
              </button>
              <button className="likeBtn">
                <i class="fa-solid fa-gear likeBtnColor"></i>
              </button>
              <img src={profilFotos} alt="" />
            </div>
          </div>

          {/* <Sidebar
          users={
            !search.length
              ? users
              : users.filter((user) =>
                  user.name
                    .toLocaleLowerCase()
                    .includes(search.trim().toLocaleLowerCase())
                )
          }
          handleClickUserAccount={handleClickUserAccount}
          handleSearch={handleSearch}
          deleteUser={deleteUser}
        /> */}
          <div className="headerCar df jc-sa">
            <div className="headerCard">
              <h1 className="TheBestText">The Best Platform for Car Rental</h1>
              <p className="EaseOfText">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <Button text={"Rental Car"} type={"btn"} />
              <br />
              <img src={whiteCar} alt="" />
            </div>
            <div className="headerCard headerCard1">
              <h1 className="TheBestText">
                Easy way to rent a car at a low price
              </h1>
              <p className="EaseOfText">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <Button text={"Rental Car"} type={"btn"} />
              <br />
              <img src={whiteCar1} alt="" />
            </div>
          </div>
          <div className="df jc-sb align-center m-top datesAndLoc">
            <div className="locationDate df">
              <div>
                <input type="radio" /> <span className="drops">Pick - Up</span>
              </div>
              <div className="df gap-40">
                <div>
                  {" "}
                  <h3 className="LocationTExt">Locations</h3>
                  <select
                    name="cars"
                    id="cars"
                    className="SelectCity"
                    placeholder="Select your city"
                  >
                    <option value="volvo">Select your city</option>
                    <option value="saab">Kareya</option>
                    <option value="saab">Uzbekistan</option>
                    <option value="audi">Rassiya</option>
                  </select>
                </div>
                <div>
                  {" "}
                  <h3 className="LocationTExt">Date</h3>
                  <select
                    name="cars"
                    id="cars"
                    className="SelectCity"
                    placeholder="Select your city"
                  >
                    <option value="volvo">Select your date</option>
                    <option value="saab">Yanvar</option>
                    <option value="saab">Fevral</option>
                    <option value="audi">Mart</option>
                  </select>
                </div>
                <div>
                  {" "}
                  <h3 className="LocationTExt">Time</h3>
                  <select
                    name="cars"
                    id="cars"
                    className="SelectCity"
                    placeholder="Select your city"
                  >
                    <option value="volvo">Select your time</option>
                    <option value="saab">Morning</option>
                    <option value="saab">Evening</option>
                    <option value="audi">Afternoon</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="middleArrow">
              <i class="fa-solid fa-arrow-right-arrow-left fa-rotate-90 swapIcon"></i>
            </div>
            <div className="locationDate df">
              <div>
                <input type="radio" /> <span className="drops">Drop - Off</span>
              </div>
              <div className="df gap-40">
                <div>
                  {" "}
                  <h3 className="LocationTExt">Locations</h3>
                  <select
                    name="cars"
                    id="cars"
                    className="SelectCity"
                    placeholder="Select your city"
                  >
                    <option value="volvo">Select your city</option>
                    <option value="saab">Kareya</option>
                    <option value="saab">Uzbekistan</option>
                    <option value="audi">Rassiya</option>
                  </select>
                </div>
                <div>
                  {" "}
                  <h3 className="LocationTExt">Date</h3>
                  <select
                    name="cars"
                    id="cars"
                    className="SelectCity"
                    placeholder="Select your city"
                  >
                    <option value="volvo">Select your date</option>
                    <option value="saab">Yanvar</option>
                    <option value="saab">Fevral</option>
                    <option value="audi">Mart</option>
                  </select>
                </div>
                <div>
                  {" "}
                  <h3 className="LocationTExt">Time</h3>
                  <select
                    name="cars"
                    id="cars"
                    className="SelectCity"
                    placeholder="Select your city"
                  >
                    <option value="volvo">Select your time</option>
                    <option value="saab">Morning</option>
                    <option value="saab">Evening</option>
                    <option value="audi">Afternoon</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <p className="PopularCarText">Popular Car</p>
          <div>
            <RentCars className="popularCar" />
          </div>
          <p className="PopularCarText">Recomendation Car</p>
          <div>
            <RentCars className="recomendedCar" />
          </div>
          <div>
            <Button text={"Show more car"} type={"btn  showMoreBtn"} />
          </div>
          <div className="footer">
            <div className="footerTop df jc-sb m-bot-64">
              <div>
                <h1 className="headerLogo">MORENT</h1>
                <p className="OurVisionText">
                  Our vision is to provide convenience and help increase your
                  sales business.
                </p>
              </div>
              <div className="df gap-64">
                <div>
                  <h2 className="aboutText">
                    <a href="#0">About</a>
                  </h2>
                  <ul>
                    <li>
                      <a href="#0">How it works</a>
                      <a href="#0">Featured</a>
                      <a href="#0">Partnership</a>
                      <a href="#0">Bussiness</a>
                      <a href="#0">Relation</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="aboutText">
                    <a href="#0">Community</a>
                  </h2>
                  <ul>
                    <li>
                      <a href="#0">How it works</a>
                      <a href="#0">Featured</a>
                      <a href="#0">Partnership</a>
                      <a href="#0">Bussiness</a>
                      <a href="#0">Relation</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="aboutText">
                    <a href="#0">Socials</a>
                  </h2>
                  <ul>
                    <li>
                      <a href="#0">How it works</a>
                      <a href="#0">Featured</a>
                      <a href="#0">Partnership</a>
                      <a href="#0">Bussiness</a>
                      <a href="#0">Relation</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="df jc-sb m-top">
              <div>
                <p className="footerText">©2022 MORENT. All rights reserved</p>
              </div>
              <div className="df gap-64">
                <p className="footerText">Privacy & Policy</p>
                <p className="footerText">Terms & Condition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
