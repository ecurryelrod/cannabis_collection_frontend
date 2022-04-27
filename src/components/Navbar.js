import React from "react";
import { NavLink } from "react-router-dom";

const link = {
    width: "100px",
    padding: "12px",
    margin: "1em",
    background: "lightgreen",
    textDecoration: "none",
    color: "black"
}

const NavBar = (props) => (
    <>
        <NavLink 
            to="/" 
            exact 
            style={link} 
            activeStyle={{background: "green", color: "white"}}
        >
            Home
        </NavLink>

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
    </>
)

export default NavBar