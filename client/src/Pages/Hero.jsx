import React from "react";
import "./Hero.css";
import img1 from "../assets/images/mosque.png";
import img2 from "../assets/images/faisal.png";
import img3 from "../assets/images/multan.png";
import img4 from "../assets/images/faisalabad.png";
import img5 from "../assets/images/karachi.png";
import img6 from "../assets/images/forma_1.png";

const Hero = () => {
  return (
    <>
      {/* ============== Hero Section Start=================== */}
      <section className="section">
        <div className="top-toutes">
          <p className="text-10">Top Routes</p>
          <div className="row-10 match-height group">
            <div className="col-7">
              <div className="shape-10-holder">
                <img className="shape-11" src={img1} alt="" />
                <img className="shape-11-copy" src={img2} alt="" />
                <div className="shape-12-holder">
                  <img
                    className="forma-1-5"
                    src={img6}
                    alt=""
                    width="25"
                    height="35"
                  />
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="shape-10-holder">
                <img className="shape-11" src={img3} alt="" />
                <img className="shape-11-copy" src={img5} alt="" />
                <div className="shape-12-holder">
                  <img
                    className="forma-1-5"
                    src={img6}
                    alt=""
                    width="25"
                    height="35"
                  />
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="shape-10-holder">
                <img className="shape-11" src={img3} alt="" />
                <img className="shape-11-copy" src={img4} alt="" />
                <div className="shape-12-holder">
                  <img
                    className="forma-1-5"
                    src={img6}
                    alt=""
                    width="25"
                    height="35"
                  />
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="shape-10-holder">
                <img className="shape-11" src={img2} alt="" />
                <img className="shape-11-copy" src={img5} alt="" />
                <div className="shape-12-holder">
                  <img
                    className="forma-1-5"
                    src={img6}
                    alt=""
                    width="25"
                    height="35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Hero Section End=================== */}
    </>
  );
};

export default Hero;
