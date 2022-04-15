import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";

import "./NewLevelForm.scss";
const NewLevelForm = (props) => {
  const formik = useFormik({
    initialValues: {
      attack: props.level ? props.level.attack : "",
      shild: props.level ? props.level.shild : "",
      health: props.level ? props.level.health : "",
      mana: props.level ? props.level.mana : "",
      experience: props.level ? props.level.experience : "",
    },
    validationSchema: Yup.object({
      attack: Yup.number().nullable().integer().required("Required"),
      shild: Yup.number().nullable().integer().required("Required"),
      health: Yup.number().nullable().integer().required("Required"),
      mana: Yup.number().nullable().integer().required("Required"),
      experience: Yup.number().nullable().integer().required("Required"),
    }),
    onSubmit: (values) => {
      props.level ?  props.handlerUpdate(values):props.handlerCreate(values)
      formik.resetForm();
      props.setShow(false);
    },
  });

  const handlerClose = () => {
    formik.resetForm();
    props.setShow(false);
  };

  return (
    <Modal show={true} onHide={handlerClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.level
            ? "Update level " + props.level.level
            : "Create new level"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className="row g-3 needs-validation"
        >
          <div className="col-md-4">
            <label htmlFor="attack" className="form-label">
              Attack:
            </label>
            <input
              type="number"
              className={`form-control`}
              id="attack"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.attack}
            />
            {formik.touched.attack && formik.errors.attack && (
              <div className="invalid-feedback d-block">
                {formik.errors.attack}
              </div>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="shild" className="form-label">
              Shild:
            </label>
            <input
              type="number"
              className="form-control"
              id="shild"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shild}
            />
            {formik.touched.shild && formik.errors.shild && (
              <div className="invalid-feedback d-block">
                {formik.errors.shild}
              </div>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="health" className="form-label">
              Health:
            </label>
            <input
              type="number"
              className="form-control"
              id="health"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.health}
            />
            {formik.touched.health && formik.errors.health && (
              <div className="invalid-feedback d-block">
                {formik.errors.health}
              </div>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="mana" className="form-label">
              Mana:
            </label>
            <input
              type="number"
              className="form-control"
              id="mana"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mana}
            />
            {formik.touched.mana && formik.errors.mana && (
              <div className="invalid-feedback d-block">
                {formik.errors.mana}
              </div>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="experience" className="form-label">
              Experience:
            </label>
            <input
              type="number"
              className="form-control"
              id="experience"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.experience}
            />
            {formik.touched.experience && formik.errors.experience && (
              <div className="invalid-feedback d-block">
                {formik.errors.experience}
              </div>
            )}
          </div>

          <div className="col-12">
            <button
              className="btn btn-primary px-4"
              disabled={!formik.errors}
              type="submit"
            >
              {props.level ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default NewLevelForm;
