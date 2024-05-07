import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./CitySelectionDropdown.css";
import { Routes, useNavigate } from "react-router-dom";

import Services from "./Services";
import Hero from "../Pages/Hero";

const CitySelectionDropdown = ({ options, onCitySelect, label }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const handleCitySelectionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
    onCitySelect(selectedValue);
  };

  return (
    <div>
      <label className="label">{label}:</label>
      <select
        value={selectedCity}
        onChange={handleCitySelectionChange}
        className="select-box date-picker"
      >
        <option value="">Select City</option>
        {options.map((city, index) => (
          <option key={index} value={city.value}>
            {city.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const CitySelectionExample = () => {
  const cities = [
    { label: "Karachi", value: "karachi" },
    { label: "Lahore", value: "lahore" },

    // Add more cities as needed
  ];

  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [bookingDate, setBookingDate] = useState(null);
  const [showBuses, setShowBuses] = useState(false);
  const [errors, setErrors] = useState({});
  const [busRoutes, setBusRoutes] = useState([]);

  const navigate = useNavigate();

  const handleDepartureCitySelect = (selectedValue) => {
    setDepartureCity(selectedValue);
    setErrors((prevErrors) => ({ ...prevErrors, departure: "" }));
  };
  const handleArrivalCitySelect = (selectedValue) => {
    setArrivalCity(selectedValue);
    setErrors((prevErrors) => ({ ...prevErrors, arrival: "" }));
  };
  const handleDateSelect = (date) => {
    setBookingDate(date);
    setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
  };

  const handleSearch = () => {
    const newErrors = {};

    if (!departureCity) {
      newErrors.departure = "Please select departure city.";
    }
    if (!arrivalCity) {
      newErrors.arrival = "Please select arrival city.";
    }
    if (!bookingDate) {
      newErrors.date = "Please select booking date.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(
        "Searching for buses:",
        departureCity,
        arrivalCity,
        bookingDate
      );
      setShowBuses(true);
      const token = localStorage.getItem("token");
      // Backend API call
      axios
        .get("http://localhost:3003/busroute", {
          params: {
            startDestination: departureCity,
            endDestination: arrivalCity,
            departureDate: bookingDate.toISOString(),
          },
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        })
        .then((response) => {
          console.log("Bus routes fetched successfully:", response.data);
          // console.log(response.data)
          // Handle response data
          if (response.data && response.data.busRoutes.length > 0) {
            // Update state with fetched bus routes
            setBusRoutes(response.data.busRoutes);
          } else {
            // No buses available for the selected criteria
            setBusRoutes([]);
          }
        })
        .catch((error) => {
          console.log(
            "Error occurred while fetching bus routes:",
            error.message
          );

          // Handle error as needed
          setBusRoutes([]); // Set empty array to indicate no buses available
        });
    }
  };

  const handleBook = (busId) => {
    navigate("/seat-book", {
      state: {
        id: busId,
      },
    });
  };

  return (
    <>
      <div className="cont">
        <h1 className="header1">BookMe - Find Your Perfect Ride</h1>
        <div className="header-group">
          <div className="header-item">
            <CitySelectionDropdown
              options={cities}
              onCitySelect={handleDepartureCitySelect}
              label="Departure City"
            />
            {errors.departure && (
              <p className="error-message">{errors.departure}</p>
            )}
          </div>
          <div className="header-item">
            <CitySelectionDropdown
              options={cities}
              onCitySelect={handleArrivalCitySelect}
              label="Arrival City"
            />
            {errors.arrival && (
              <p className="error-message">{errors.arrival}</p>
            )}
          </div>
          <div className="header-item">
            <label className="label">Booking Date:</label>
            <DatePicker
              selected={bookingDate}
              onChange={handleDateSelect}
              minDate={new Date()}
              placeholderText="Select date"
              className="date-picker"
            />
            {errors.date && <p className="error-message">{errors.date}</p>}
          </div>
          <div className="header-item">
            <button onClick={handleSearch} className="search-button1">
              Search
            </button>
          </div>
        </div>
        {showBuses && (
          <div className="bus-list">
            <h2>Available Buses</h2>
            {busRoutes.length > 0 ? (
              <ul className="bus-routes-list">
                {busRoutes.map((busRoute, index) => (
                  <li key={index}>
                    <div className="bus-route-item">
                      <span className="route">
                        {busRoute.startDestination} - {busRoute.endDestination}
                      </span>
                    </div>
                    <div className="bus-route-item">
                      <span className="departure-time">
                        Departure Time: {busRoute.departureTime}
                      </span>
                    </div>
                    <div className="bus-route-item">
                      <span className="fare">Fare: {busRoute.fare}</span>
                    </div>
                    <div className="bus-route-item">
                      <div className="button-container">
                        <button
                          className="book-now-button"
                          onClick={() => handleBook(busRoute.BusId)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No buses available for the selected criteria.</p>
            )}
          </div>
        )}
      </div>
      <Hero></Hero>
      <Services />
    </>
  );
};

export default CitySelectionExample;
