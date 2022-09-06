import React, { useEffect, useState } from "react";
import "../liveShows/LiveShow.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { BASE_URL } from "../../api/BaseConfig";
const LiveShow = () => {
  const [liveshow, setLiveshow] = useState([]);
  const GetLive = () => {
    fetch(`${BASE_URL}api/LiveShows/GetAll`)
      .then((c) => c.json())
      .then((s) => setLiveshow(s));
  };
  useEffect(() => {
    GetLive();
  }, []);

  return (
    <section className="block">
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
          
            <div className="liveShows">
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
                          src={c.musicians.map((s) => s.musicians.photo)}
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
                    <a href="#" className="theme-btn">
                      Buy Tickets
                    </a>
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
