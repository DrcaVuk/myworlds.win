import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../shared/components/UI/Button/Button";

import './ContactForm.css';

const ContactForm = () => {
    return(
            <form>
                <div className="form-control">
                <label for="form-email">Email:</label>
                <input name="form-email" id="form-email" placeholder="Enter Your Email"/>
                </div>
                <div className="form-control">
                    <label for="form-title">Title:</label>
                    <input type="text" name="form-title" id="form-title" placeholder="Entet title" />
                </div>
                <div className="form-control">
                    <label for="form-message">Message:</label>
                    <textarea id="form-message" rows="3"></textarea>
                </div>
                <div className="form-control">
                    <Button >SEND</Button>
                </div>
            </form>
    )
}

export default ContactForm;