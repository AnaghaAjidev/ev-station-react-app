import React, { useState } from 'react'
import axios from 'axios'

const AddBooking = () => {

    const [input, changeInput] = useState({
        booking_id: "",
        owner_name: "",
        email: "",
        phone: "",
        vehicle_reg_no: "",
        vehicle_brand: "",
        vehicle_model: "",
        battery_capacity: "",
        charging_date: "",
        connector_type: "",
        time_slot: "",
        estimated_units: "",
        charging_bay_no: ""
    })

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add_booking", input)
            .then((response) => {

                alert(response.data.status)

                changeInput({
                    booking_id: "",
                    owner_name: "",
                    email: "",
                    phone: "",
                    vehicle_reg_no: "",
                    vehicle_brand: "",
                    vehicle_model: "",
                    battery_capacity: "",
                    charging_date: "",
                    connector_type: "",
                    time_slot: "",
                    estimated_units: "",
                    charging_bay_no: ""
                })

            })
            .catch((error) => {
                console.log(error)
                alert("Booking Failed")
            })

    }

    return (

        <div
            style={{
                backgroundColor: "#eef4ff",
                minHeight: "100vh",
                padding: "50px"
            }}
        >

            <div className="container">

                <div
                    className="row"
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)"
                    }}
                >

                    {/* Left Panel */}

                    <div
                        className="col-md-4 text-white d-flex flex-column justify-content-center"
                        style={{
                           background: "linear-gradient(180deg, #00897B, #00695C)",
                            padding: "40px"
                        }}
                    >

                        <h2 className="fw-bold">
                            Public EV Charging Station
                        </h2>

                        <p className="mt-3">
                            Register your electric vehicle and reserve a charging bay quickly and securely.
                        </p>

                        <hr />

                        <p>⚡ Fast Charging Slots</p>
                        <p>🚗 Easy Vehicle Registration</p>
                        <p>🔋 Multiple Connector Types</p>
                        <p>📅 Instant Booking Confirmation</p>

                    </div>

                    {/* Right Panel */}

                    <div className="col-md-8 bg-white p-4">

                        <h3 className="text-center text-dark mb-4">
                            Charging Station Booking
                        </h3>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Booking ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="booking_id"
                                    value={input.booking_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="owner_name"
                                    value={input.owner_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Registration No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="vehicle_reg_no"
                                    value={input.vehicle_reg_no}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Brand</label>
                                <select
                                    className="form-select"
                                    name="vehicle_brand"
                                    value={input.vehicle_brand}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select Brand</option>
                                    <option>Tata</option>
                                    <option>MG</option>
                                    <option>Hyundai</option>
                                    <option>Mahindra</option>
                                    <option>BYD</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="vehicle_model"
                                    value={input.vehicle_model}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Battery Capacity (kWh)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="battery_capacity"
                                    value={input.battery_capacity}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Charging Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="charging_date"
                                    value={input.charging_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Connector Type</label>
                                <select
                                    className="form-select"
                                    name="connector_type"
                                    value={input.connector_type}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select Connector</option>
                                    <option>CCS2</option>
                                    <option>Type 2</option>
                                    <option>CHAdeMO</option>
                                    <option>GB/T</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>Time Slot</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="time_slot"
                                    value={input.time_slot}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Estimated Units (kWh)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="estimated_units"
                                    value={input.estimated_units}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-12">
                                <label>Charging Bay Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="charging_bay_no"
                                    value={input.charging_bay_no}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 text-center mt-4">

                                <button
                                    className="btn btn-dark btn-lg px-5"
                                    style={{ borderRadius: "30px" }}
                                    onClick={readValue}
                                >
                                    Register Booking
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default AddBooking