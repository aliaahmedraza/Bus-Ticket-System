import React from "react";
import "../Component/Services.css";
import { SiHelpscout } from "react-icons/si";
import { MdOutlineManageHistory } from "react-icons/md";
import { BiBus } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section>
        <div className="row">
          <h4 className="section-heading">Our Services</h4>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <SiHelpscout />
              </div>
              <div>
                <h3>Help Center</h3>
                <p>Connect with our support team</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <MdOutlineManageHistory />
              </div>
              <h3>Manage Bookings</h3>
              <p>Connect with our support team</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <BiBus />
              </div>
              <h3>Bus Information</h3>
              <p>Connect with our support team</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
