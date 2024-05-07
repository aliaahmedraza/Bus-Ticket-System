import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ForgotPassword.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (values, { setSubmitting }) => {
    const { email } = values;
    const newMessage = `An email has been sent to ${email} with instructions on how to reset your password.`;
    setMessage(newMessage);
    setSubmitting(false);
  };

  return (
    <div className="form-container3">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={yup.object().shape({
          email: yup.string().email("Invalid email").required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="content3">
              <div className="text3">Forgot Password</div>
              <div className="field3">
                <div className="form-group3">
                  <span className="field-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <Field
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    className="input-email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="error-message"
                  />
                </div>
              </div>
              <br />
              <button
                type="submit"
                className="submit-button3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
