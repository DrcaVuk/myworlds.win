import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../shared/components/UI/Button/Button";

import "./ContactForm.css";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      title: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
      title: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      //Ovde dodati deo za slanje poruke...
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="form-email">Email:</label>
        <input
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          id="form-email"
          placeholder="Enter Your Email"
          className={`${formik.touched.email && formik.errors.email ? "error" : ""}`}
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="form-title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          id="form-title"
          placeholder="Entet title"
          className={`${formik.touched.title && formik.errors.title ? "error" : ""}`}
        />
        {formik.touched.title && formik.errors.title && (
          <p>{formik.errors.title}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="form-message">Message:</label>
        <textarea
          id="message"
          rows="5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder="Entet message"
          className={`${formik.touched.message && formik.errors.message ? "error" : ""}`}
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <p>{formik.errors.message}</p>
        )}
      </div>
      <div className="form-control">
        <Button>SEND</Button>
      </div>
    </form>
  );
};

export default ContactForm;
