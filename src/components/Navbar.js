import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = () => {
    const link = {
        width: "100px",
        padding: "12px",
        margin: "1em",
        background: "#D3EBCD",
        textDecoration: "none",
        color: "black",
        border: "2px solid #446A46",
        borderRadius: "10px"
    }

    return (
        <>
            <h1>Cannabis Collection</h1>
            <NavLink 
                to="/strains" 
                exact 
                style={link} 
                activeStyle={{background: "#446A46", color: "white"}}
            >
                Strains
            </NavLink>

            <NavLink 
                to="/strains/new" 
                exact 
                style={link} 
                activeStyle={{background: "#446A46", color: "white"}}
            >
                Create a New Strain
            </NavLink>

            <Logout />
        </>
    )
}

export default NavBar