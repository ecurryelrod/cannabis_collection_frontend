import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";
import { useHistory } from "react-router-dom";

const Logout = ({logout}) => {
    const history = useHistory()

    const link = {
        width: "100px",
        padding: "12px",
        margin: "1em",
        background: "#D3EBCD",
        textDecoration: "none",
        color: "black",
        borderRadius: "10px",
        borderColor: "#446A46"
    }

    const handleOnClick = () => {
        logout(history)
    }

    return <button style={link} onClick={handleOnClick}>Logout</button>
}

export default connect(null, {logout})(Logout)