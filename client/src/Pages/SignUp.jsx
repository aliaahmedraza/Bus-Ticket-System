// SignUp.jsx

import React, { Fragment } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup.string().required("Please enter the username").min(3).max(50),
    email: yup.string().required("Please enter a valid email").email(),
    password: yup.string().required("Please enter a password").min(5).max(10),
    role: yup.string().required("Please select a role"),
  });

  const handleSubmit = async (values) => {
    try {
      console.log("Form submitted with values:", values);
      const response = await axios.post("http://localhost:3003/signup", {
        username: values.username,
        email: values.email,
        password: values.password,
        role: values.role,
      });
      console.log("Registration Success");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div className="form-container2">
        <Formik
          initialValues={{ username: "", email: "", password: "", role: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="content2">
              <div className="text2">Sign Up</div>
              <div className="field2">
                <div className="form-group2">
                  <span className="field-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <Field
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="p"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="field2">
                <div className="form-group2">
                  <span className="field-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <Field
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="field2">
                <div className="form-group2">
                  <span className="field-icon">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <Field
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="field2">
                <div className="form-group2">
                  <Field
                    as="select"
                    name="role"
                    className="field2 option-group"
                  >
                    <option value="">Please Select Your Role</option>
                    <option value="admin">Admin</option>
                    <option value="passenger">Passenger</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="p"
                    className="error-message"
                  />
                </div>
              </div>
              <button type="submit" className="submit-button2">
                Sign Up
              </button>
              <div className="sign-up">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
}

export default SignUp;
