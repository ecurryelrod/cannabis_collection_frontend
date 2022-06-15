import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = () => {
    const link = {
        width: "100px",
        padding: "12px",
        margin: "1em",
        background: "lightgreen",
        textDecoration: "none",
        color: "black",
        border: "2px solid darkgreen",
        borderRadius: "10px"
    }

    return (
        <>
            <NavLink 
                to="/strains" 
                exact 
                style={link} 
                activeStyle={{background: "green", color: "white"}}
            >
                Strains
            </NavLink>

            <NavLink 
                to="/strains/new" 
                exact 
                style={link} 
                activeStyle={{background: "green", color: "white"}}
            >
                Create a New Strain
            </NavLink>

            <Logout />
        </>
    )
}

export default NavBar