import React, { useEffect, useState } from "react";
import "../liveShows/LiveShow.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { BASE_URL } from "../../api/BaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { AddToCart } from "../../Redux/Actions/CartAction";
import "react-toastify/dist/ReactToastify.css";

const LiveShow = () => {
  const [liveshow, setLiveshow] = useState([]);
  const dispatch = useDispatch();
  const { cartitems } = useSelector((state) => state.cart);
  const GetLive = () => {
    fetch(`${BASE_URL}api/LiveShows/GetAll`)
      .then((c) => c.json())
      .then((s) => setLiveshow(s));
  };
  useEffect(() => {
    GetLive();
  }, []);


  const handlerAddToCart = (id, name) => {
    const findItem =
      cartitems.length > 0 ? cartitems.find((ct) => ct.id === id) : null;
    const quantity = findItem ? findItem.quantity + 1 : 1;
    {
      dispatch(AddToCart(id, quantity));
    }
  const notify = () => toast(`${name} sebete elave olundu`);

    notify(name);
  
  };
  return (
    <section className="block">
      <ToastContainer />

      <div className="lives"></div>

      <div className="container">
        <div className="live-head">
          <h2>Upcoming Shows</h2>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </span>
        </div>
        {liveshow.map((c) => (
          <>
            <div key={c.Id} className="liveShows">
              <div className="show-row">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="show-head">
                      <div className="show-date">
                        <h4>19</h4>
                        <h5>Jan</h5>
                      </div>
                      <div className="show-thumb">
                        <img
                          src={c.photo}
                          alt=""
                        />
                      </div>
                      <div className="show-info">
                        <h3>{c.name}</h3>
                        <span>{c.description} </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <ul className="show-time">
                      <li>
                        <div className="sw-icon">
                          <LocationOnIcon />
                        </div>
                        {c.loacation}
                      </li>
                      <li>
                        <div className="sw-icon">
                          <ScheduleIcon />
                        </div>
                        <span>{c.startTime}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2">
                    <button
                      onClick={() => handlerAddToCart(c.id,c.name)}
                      className="theme-btn"
                    >
                      Buy Tickets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default LiveShow;
