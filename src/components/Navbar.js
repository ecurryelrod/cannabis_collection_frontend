import React from "react";
import { NavLink } from "react-router-dom";

const link = {
    width: "100px",
    padding: "12px",
    margin: "1em",
    textDecoration: "blue",
    color: "white"
}

const NavBar = (props) => (
    <>
        <NavLink 
            to="/" 
            exact 
            style={link} 
            activeStyle={{background: "darkblue"}}
        >
            Home
        </NavLink>

        <NavLink 
            to="/" 
            exact 
            style={link} 
            activeStyle={{background: "darkblue"}}
        >
            Strains
        </NavLink>

        <NavLink 
            to="/" 
            exact 
            style={link} 
            activeStyle={{background: "darkblue"}}
        >
            Create a New Strain
        </NavLink>
    </>
)

export default NavBar