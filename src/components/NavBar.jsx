import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg shadow"
            style={{ backgroundColor: "#00897B" }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold text-white"
                    to="/"
                >
                    ⚡ EV Charging Station
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">


                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/"
                            >
                                Add Booking
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/view"
                            >
                                View Bookings
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default NavBar