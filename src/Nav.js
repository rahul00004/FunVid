import React, { useState, useEffect } from 'react'
import './Nav.css'
import Logo from './image/logo1.png'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)

            }
            else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])





    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                src={Logo}
                alt="" className="nav_logo" />




        </div>
    )
}

export default Nav

