import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import { BsLinkedin } from "react-icons/bs";

import "../Component/ContactForm.css";
const Contactus = () => {
  return (
    <>
      <section className="section">
        <div className="box">
          <div className="info">
            <h2 className="info-tittle">Contact Information</h2>
            <h3 className="info-sub-title">
              Fill up the form and our team will get back to you within 24 hours
            </h3>
            <ul className="info-details">
              <li>
                <i>
                  {" "}
                  <MdLocalPhone />
                </i>
                <span>Phone: </span>
                <a href="tel:+923458769543">+923458769543</a>
              </li>
              <li>
                <i>
                  <MdOutlineMail />
                </i>
                <span>Email: </span>
                <a href="mailto:info@travelgo.com">info@travelgo.com</a>
              </li>
            </ul>
            <ul className="social-icon">
              <li>
                <a href="#">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="form">
            <form action="#" method="POST">
              <h2 className="form-title">Send us message</h2>
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="text"
                    className="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="email"
                    placeholder="Enter EMail"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="phone"
                    placeholder="Enter Phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Write Your Message"
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="send message"
                className="submit-message"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
