import React from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {logout} from "../../actions/auth";

function Profile(props) {

    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    if (!currentUser) {
        return <Redirect to="/login"/>;
    }
    const handleClick = () => {
        dispatch(logout());
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Password:</strong> {currentUser.password}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Se deconnecter
            </Button>
        </div>
    );
}

export default Profile;