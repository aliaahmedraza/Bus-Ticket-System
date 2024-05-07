import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "./ForgotPassword";
import CitySelectionExample from "./CitySelectionDropdown";
// import BookSeat from "../Pages/bookSeat";
import Passengerdetail from "./PassengerDetail";
import Contactus from "./ContactForm";
import Services from "./Services";
import FrontPage from "../Pages/bookSeat";
// import Hero from "../Pages/Hero";
// import Home from "./Home";

const Paths = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        {/* <Route path="/Hero" element={<Hero></Hero>}></Route> */}
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/City" element={<CitySelectionExample />}></Route>
        {/* <Route path="/seat" element={<SeatSelection />}></Route> */}
        <Route path="/seat-book" element={<FrontPage />}></Route>
        <Route path="/Passengerdetail" element={<Passengerdetail />}></Route>
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </>
  );
};

export default Paths;
