import React, { Fragment, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link if using React Router
import "../Component/PassengerDetail.css";

import { useNavigate } from "react-router-dom";

function Passengerdetail() {
  const navigate = useNavigate();

  const defaultValue = {
    fullName: "",
    phoneNumber: "",
    gender: "",
    idCardNumber: "",
  };

  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Please enter the username").min(3).max(50),
    gender: yup.string().required("Please select  the gender"),
    // email: yup.string().required("Please select  the email").email(),
    phoneNumber: yup
      .string()
      .required("Please enter the phone")
      .min(10)
      .max(11),
    idCardNumber: yup.string().required("Please enter the id cardnumber"),
  });

  const token = localStorage.getItem("token");
  console.log(token);
  const handleSubmit = async (values) => {
    console.log("Form submitted with values:", values);
    await axios
      .post(
        "http://localhost:3003/pinfo",

        {
          fullName: values.fullName,
          gender: values.gender,
          phoneNumber: values.phoneNumber,
          idCardNumber: String(values.idCardNumber),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      )
      .then((response) => {
        console.log(" Success", response);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // navigate("/login");
  };

  return (
    <Fragment>
      <div className="form-container4">
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="content4">
              <div className="text4">Passanger Details</div>
              <div className="field4">
                <div className="form-group4">
                  <span className="field-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <Field
                    type="text"
                    placeholder="Enter the Full Name"
                    name="fullName"
                  />
                  <ErrorMessage name="fullName" component="p" />
                </div>
              </div>
              <div className="field4">
                <div className="form-group4">
                  <span className="field-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <Field
                    type="tel"
                    placeholder="Enter the Phone Number"
                    name="phoneNumber"
                  />
                  <ErrorMessage name="phoneNumber" component="p" />
                </div>
              </div>
              <div className="field4">
                <div className="form-group4">
                  <span className="field-icon">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <Field
                    type="Number"
                    placeholder="Enter the id Card Number"
                    name="idCardNumber"
                  />
                  <ErrorMessage name="idCardNumber" component="p" />
                </div>
              </div>
              <div className="field4">
                <div className="form-group4">
                  <Field
                    as="select"
                    name="gender"
                    className="field4 option-group4"
                  >
                    <option value="">Please Select Your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                </div>
              </div>

              <button type="submit" className="submit-button4" onClick="/login">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
}

export default Passengerdetail;
