import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewBooking = () => {

    const [bookingData, changeBookingData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view_booking", {})
            .then((response) => {
                changeBookingData(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert("Failed to Fetch Bookings")
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(180deg, #00897B, #00695C)",
                padding: "40px"
            }}
        >

            <div className="container">

                <div
                    className="card border-0"
                    style={{
                        borderRadius: "20px",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.3)"
                    }}
                >

                    <div
                        className="card-header text-center"
                        style={{
                            background: "#ffffff",
                            color: "#004D40",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px"
                        }}
                    >
                        <h2 className="fw-bold mb-0">
                            EV Charging Booking Details
                        </h2>
                    </div>

                    <div className="card-body bg-white">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover align-middle">

                                <thead
                                    style={{
                                        backgroundColor: "#B2DFDB",
                                        color: "#004D40"
                                    }}
                                >
                                    <tr className="text-center">
                                        <th>Booking ID</th>
                                        <th>Owner Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Vehicle Reg. No.</th>
                                        <th>Brand</th>
                                        <th>Model</th>
                                        <th>Battery (kWh)</th>
                                        <th>Charging Date</th>
                                        <th>Connector</th>
                                        <th>Time Slot</th>
                                        <th>Estimated Units</th>
                                        <th>Charging Bay</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        bookingData.map((value, index) => (

                                            <tr key={index} className="text-center">

                                                <td>{value.booking_id}</td>
                                                <td>{value.owner_name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.vehicle_reg_no}</td>
                                                <td>{value.vehicle_brand}</td>
                                                <td>{value.vehicle_model}</td>
                                                <td>{value.battery_capacity}</td>
                                                <td>{value.charging_date}</td>
                                                <td>{value.connector_type}</td>
                                                <td>{value.time_slot}</td>
                                                <td>{value.estimated_units}</td>
                                                <td>
                                                    <span
                                                        className="badge"
                                                        style={{
                                                            backgroundColor: "#00897B",
                                                            color: "white",
                                                            fontSize: "14px"
                                                        }}
                                                    >
                                                        {value.charging_bay_no}
                                                    </span>
                                                </td>

                                            </tr>

                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default ViewBooking