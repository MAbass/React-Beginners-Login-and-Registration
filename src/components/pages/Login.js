import {React, useState} from 'react';
import "../assets/css/index.css"
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/auth";


function Login(props) {

    /* const {isLoggedIn} = useSelector(state => state.auth);
     const {message} = useSelector(state => state.message);*/
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);


    const initialValues = {
        username: "",
        password: ""
    }
    const validationSchema = Yup.object(({
        username: Yup.string().required("Obligatoire"),
        password: Yup.string().required("Obligatoire")

    }))
    const onSubmit = (event) => {
        dispatch(login(event.username, event.password))
            .then((response) => {
                console.log("Successfully login")
                /* props.history.push("/profile");
                 window.location.reload();*/
            })
            .catch(() => {
                setLoading(false);
            });
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <div>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row">
                                    <img src="https://i.imgur.com/CXQmsmF.png" className="logo" alt="None"/>
                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt="None"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div className="facebook text-center mr-3">
                                        <div className="fab fa-facebook"/>
                                    </div>
                                    <div className="twitter text-center mr-3">
                                        <div className="fab fa-twitter"/>
                                    </div>
                                    <div className="linkedin text-center mr-3">
                                        <div className="fab fa-linkedin"/>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"/>
                                    <small className="or text-center">Or</small>
                                    <div className="line"/>
                                </div>
                                <form onSubmit={formik.handleSubmit} id="form-submit">
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Username</h6>
                                        </label>
                                        <input className="mb-4" type="text" name="username"
                                               defaultValue={formik.initialValues.username}
                                               onChange={formik.handleChange}
                                               placeholder="Enter a valid email address"/>
                                        {formik.errors.username && formik.touched.username && (
                                            <p style={{color: "red"}}>{formik.errors.username}</p>)}
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Password</h6>
                                        </label>
                                        <input type="password" name="password"
                                               placeholder="Enter password"
                                               defaultValue={formik.initialValues.password}
                                               onChange={formik.handleChange}/>
                                        {formik.errors.password && formik.touched.password && (
                                            <p style={{color: "red"}}>{formik.errors.password}</p>)}
                                    </div>
                                    <div className="row mb-3 px-3">
                                        <button type="submit" className="btn btn-blue text-center">Login</button>
                                    </div>
                                </form>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input id="chk1" type="checkbox" name="chk"
                                               className="custom-control-input"/>
                                        <label htmlFor="chk1" className="custom-control-label text-sm">Remember me
                                        </label>
                                    </div>
                                    <Link to="/forgotPassword" className="ml-auto mb-0 text-sm">Forgot Password?
                                    </Link>
                                </div>
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold">Don't have an account?
                                        <Link className="text-danger " to="/register">Register</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-4">
                        <div className="row px-3">
                            <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                            <div className="social-contact ml-4 ml-sm-auto">
                                <span className="fab fa-facebook mr-4 text-sm"/>
                                <span className="fab fa-google-plus mr-4 text-sm"/>
                                <span className="fab fa-linkedin mr-4 text-sm"/>
                                <span className="fab fa-twitter mr-4 mr-sm-5 text-sm"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;