import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';


function Contact() {
    const initialValues = {
        name: "",
        phone: "",
        message: "",
        email: ""
    }
    const onSubmit = values => {
        console.log("Submitted = ", values);
    }
    // eslint-disable-next-line no-unused-vars
    const validate = (values) => {
        // values.name
    }

    // eslint-disable-next-line no-unused-vars
    const validationSchema = Yup.object({
        name: Yup.string().required("Required!"),
        email: Yup.string().required("Required").email("Your email is not valid"),
        phone: Yup.string().required("Required"),
        message: Yup.string().required("Required")
    })
    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })

    return (
        <div>
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" onSubmit={formik.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control"
                                           id="name"
                                           type="text"
                                           placeholder="Your Name *"
                                           defaultValue={formik.values.name}
                                           onChange={formik.handleChange}/>
                                    {formik.errors.name && formik.touched.name && (
                                        <p style={{color: "red"}}>{formik.errors.name}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                           id="email"
                                           type="text"
                                           placeholder="Your Email *"
                                           defaultValue={formik.values.email}
                                           onChange={formik.handleChange}/>

                                    {formik.errors.email && formik.touched.email && (
                                        <p style={{color: "red"}}>{formik.errors.email}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                           id="phone"
                                           type="tel"
                                           placeholder="Your Phone *"
                                           defaultValue={formik.values.phone}
                                           onChange={formik.handleChange}/>

                                    {formik.errors.phone && formik.touched.phone && (
                                        <p style={{color: "red"}}>{formik.errors.phone}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                        <textarea className="form-control"
                                                  id="message"
                                                  placeholder="Your Message *"
                                                  onChange={formik.handleChange}/>

                                    {formik.errors.message && formik.touched.message && (
                                        <p style={{color: "red"}}>{formik.errors.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div id="success"/>
                            <button className="btn btn-primary btn-xl text-uppercase"
                                    id="sendMessageButton"
                                    type="submit">Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );

}

export default Contact;