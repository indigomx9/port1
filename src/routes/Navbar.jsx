import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="nav">
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li>
                    {" "}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <i
                className={open ? "fas fa-bars close" : "fas fa-bars open"}
                onClick={() => setOpen(true)}
                ></i>
            <i
                className={open ? "fas fa-times open" : "fas fa-times close"}
                onClick={() => setOpen(false)}
                ></i>
        </nav>
    );
};




