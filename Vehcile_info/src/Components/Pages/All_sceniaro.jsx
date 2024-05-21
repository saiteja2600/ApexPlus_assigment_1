import React, { useState } from "react";
import "./Add_entry.css";

export default function All_sceniaro() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  //sceniaro values
  const [scenario_values, setScenario_values] = useState({
    scenario_name: "",
    scenario_time: "",
  });

  const [scenario_values_data, setScenario_values_data] = useState([]);
  const [scenario_error, setScenario_errors] = useState({});

  //sceniaro function
  function handleScenario(e) {
    const { name, value } = e.target;
    setScenario_values({ ...scenario_values, [name]: value });

    let ScenarioErrors = { ...scenario_error };

    if (name === "scenario_name") {
      if (!value) {
        ScenarioErrors.scenario_name = "Please Enter Scenario name";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        ScenarioErrors.scenario_name = "Only Alphabets accepted";
      } else if (value.length < 3 || value.length > 30) {
        ScenarioErrors.scenario_name = "Scenario name must be between 3 and 30";
      } else {
        delete ScenarioErrors.scenario_name;
      }
    }

    if (name === "scenario_time") {
      if (!value) {
        ScenarioErrors.scenario_time = "Please Enter Scenario Time";
      } else if (!/^\d+$/.test(value)) {
        ScenarioErrors.scenario_time = "Only number are accepted";
      } else if (parseInt(value) < 5 || parseInt(value) > 86400) {
        ScenarioErrors.scenario_time = "Scenario time must 5 and 86400 seconds";
      } else {
        delete ScenarioErrors.scenario_time;
      }
    }

    setScenario_errors(ScenarioErrors);
  }

  function handleScenarioSubmit(e) {
    e.preventDefault();
    let FormIsValid = true;
    let ScenarioErrors = {};

    if (!scenario_values.scenario_name) {
      FormIsValid = false;
      ScenarioErrors.scenario_name = "Please Enter Scenario name";
    } else if (!/^[a-zA-Z\s]+$/.test(scenario_values.scenario_name)) {
      FormIsValid = false;
      ScenarioErrors.scenario_name = "Only Alphabets accepted";
    } else if (
      scenario_values.scenario_name.length < 3 ||
      scenario_values.scenario_name.length > 30
    ) {
      FormIsValid = false;
      ScenarioErrors.scenario_name = "Scenario name must be between 3 and 30";
    }

    if (!scenario_values.scenario_time) {
      FormIsValid = false;
      ScenarioErrors.scenario_time = "Please Enter Scenario time";
    } else if (!/^\d+$/.test(scenario_values.scenario_time)) {
      FormIsValid = false;
      ScenarioErrors.scenario_time = "Only number are accepted";
    } else if (
      parseInt(scenario_values.scenario_time) < 5 ||
      parseInt(scenario_values.scenario_time) > 86400
    ) {
      FormIsValid = false;
      ScenarioErrors.scenario_time = "Scenario time must 5 and 86400 seconds";
    }

    setScenario_errors(ScenarioErrors);

    if (FormIsValid) {
      setScenario_values_data([...scenario_values_data, scenario_values]);

      setScenario_values({
        scenario_name: "",
        scenario_time: "",
      });
    }
  }

  function handleResetScenario() {
    setScenario_values({
      scenario_name: "",
      scenario_time: "",
    });
    setScenario_errors({});
  }

  //vehicle function
  const [vehicle_value, setVehicle_values] = useState({
    scenario_list: "",
    vehicle_name: "",
    speed: "",
    position_x: "",
    position_y: "",
    direction: "",
  });
  const [vehicle_value_data, setValues_data] = useState([]);
  const [vehicle_error, setVehicle_error] = useState({});

  function handlevehicle(e1) {
    const { name, value } = e1.target;
    let VehicleError = { ...vehicle_error };
    setVehicle_values({ ...vehicle_value, [name]: value });

    if (name === "scenario_list") {
      if (!value) {
        VehicleError.scenario_list = "Please Select Scenario List";
      } else {
        delete VehicleError.scenario_list;
      }
    }

    if (name === "vehicle_name") {
      if (!value) {
        VehicleError.vehicle_name = "Enter Vehicle Name";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        VehicleError.vehicle_name = "Only alphabets accepted";
      } else {
        delete VehicleError.vehicle_name;
      }
    }

    if (name === "speed") {
      if (!value) {
        VehicleError.speed = "Enter Speed";
      } else if (!/^\d+$/.test(value)) {
        VehicleError.speed = "Only numbers allowed";
      } else if (parseInt(value) <= 0) {
        VehicleError.speed = "Speed must be greater than Zero";
      } else {
        delete VehicleError.speed;
      }
    }

    if (name === "position_x") {
      if (!value) {
        VehicleError.position_x = "Enter Position X";
      } else if (!/^\d+$/.test(value)) {
        VehicleError.position_x = "Only numbers allowed";
      } else {
        delete VehicleError.position_x;
      }
    }

    if (name === "position_y") {
      if (!value) {
        VehicleError.position_y = "Enter Position Y";
      } else if (!/^\d+$/.test(value)) {
        VehicleError.position_y = "Only numbers allowed";
      } else {
        delete VehicleError.position_y;
      }
    }

    if (name === "direction") {
      if (!value) {
        VehicleError.direction = "Please Select Direction";
      } else {
        delete VehicleError.direction;
      }
    }

    setVehicle_error(VehicleError);
  }

  function handleVehicleSubmit(e1) {
    e1.preventDefault();
    let VehicleForm = true;
    let VehicleError = {};

    if (!vehicle_value.scenario_list) {
      VehicleForm = false;
      VehicleError.scenario_list = "Please Select Scenario List";
    }

    if (!vehicle_value.vehicle_name) {
      VehicleForm = false;
      VehicleError.vehicle_name = "Enter Vehicle Name";
    } else if (!/^[a-zA-Z\s]+$/.test(vehicle_value.vehicle_name)) {
      VehicleForm = false;
      VehicleError.vehicle_name = "Only alphabets accepted";
    } else if (
      vehicle_value.vehicle_name.length < 3 ||
      vehicle_value.vehicle_name.length > 20
    ) {
      VehicleForm = false;
      VehicleError.vehicle_name =
        "Vehicle name must be between 3 and 20 characters";
    }

    if (!vehicle_value.speed) {
      VehicleForm = false;
      VehicleError.speed = "Enter Speed";
    } else if (!/^\d+$/.test(vehicle_value.speed)) {
      VehicleForm = false;
      VehicleError.speed = "Only numbers accepted";
    } else if (
      parseInt(vehicle_value.speed) <= 0 ||
      parseInt(vehicle_value.speed) >= 200
    ) {
      VehicleForm = false;
      VehicleError.speed = "Speed must be between 1 and 199";
    }

    if (!vehicle_value.position_x) {
      VehicleForm = false;
      VehicleError.position_x = "Enter Position X";
    } else if (!/^\d+$/.test(vehicle_value.position_x)) {
      VehicleForm = false;
      VehicleError.position_x = "Only numbers accepted";
    } else if (
      parseInt(vehicle_value.position_x) < 0 ||
      parseInt(vehicle_value.position_x) > 8000
    ) {
      VehicleForm = false;
      VehicleError.position_x = "Position x must be between 0 and 8000";
    }

    if (!vehicle_value.position_y) {
      VehicleForm = false;
      VehicleError.position_y = "Enter Position Y";
    } else if (!/^\d+$/.test(vehicle_value.position_y)) {
      VehicleForm = false;
      VehicleError.position_y = "Only numbers accepted";
    } else if (
      parseInt(vehicle_value.position_y) < 0 ||
      parseInt(vehicle_value.position_y) > 8000
    ) {
      VehicleForm = false;
      VehicleError.position_y = "Position y must be between 0 and 8000";
    }

    if (!vehicle_value.direction) {
      VehicleForm = false;
      VehicleError.direction = "Please Select Direction";
    }

    setVehicle_error(VehicleError);

    if (VehicleForm) {
      setValues_data([...vehicle_value_data, vehicle_value]);
      setVehicle_values({
        scenario_list: "",
        vehicle_name: "",
        speed: "",
        position_x: "",
        position_y: "",
        direction: "",
      });
    }
  }

  function handleResetVehicle() {
    setVehicle_values({
      scenario_list: "",
      vehicle_name: "",
      speed: "",
      position_x: "",
      position_y: "",
      direction: "",
    });
    setVehicle_error({});
  }

  return (
    <div className="container mt-5 p-3">
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="text-white">All Sceniaro</h4>
        </div>
        <div>
          <button className="btn1 m-1" onClick={handleShowModal}>
            New Sceniaro
          </button>
          <button className="btn2 m-1" onClick={handleShowModal1}>
            Add Vehicle
          </button>
        </div>
      </div>
      {/* Scenario modal */}
      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-white">Add Scenario</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body bg-dark">
                <form
                  action=""
                  method="post"
                  onSubmit={handleScenarioSubmit}
                  onReset={handleResetScenario}
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Scenario Name</b>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            scenario_error.scenario_name ? "scenario_error" : ""
                          }`}
                          name="scenario_name"
                          placeholder="Enter Scenario Name"
                          value={scenario_values.scenario_name}
                          onChange={handleScenario}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        {scenario_error.scenario_name && (
                          <p className="error-messages ">
                            {scenario_error.scenario_name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Scenario Time</b>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            scenario_error.scenario_time ? "scenario_error" : ""
                          }`}
                          name="scenario_time"
                          placeholder="Enter Scenario Time"
                          value={scenario_values.scenario_time}
                          onChange={handleScenario}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        {scenario_error.scenario_time && (
                          <p className="error-messages">
                            {scenario_error.scenario_time}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn1 m-1">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn2 m-1"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                  {console.log(scenario_values_data)}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show"></div>}

      {/* Vehicle modal */}
      {showModal1 && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-white">Add Vehicle</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={handleCloseModal1}
                ></button>
              </div>
              <div className="modal-body bg-dark">
                <form
                  action=""
                  method="post"
                  onSubmit={handleVehicleSubmit}
                  onReset={handleResetVehicle}
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Scenario list</b>
                        </label>
                        <select
                          name="scenario_list"
                          className={`form-select ${
                            vehicle_error.scenario_list ? "error" : ""
                          }`}
                          onChange={handlevehicle}
                          value={vehicle_value.scenario_list}
                        >
                          <option value="">Select Scenario</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                        </select>
                      </div>
                      {vehicle_error.scenario_list && (
                        <div className="d-flex justify-content-center">
                          <p className="error-messages">
                            {vehicle_error.scenario_list}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Vehicle Name</b>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            vehicle_error.vehicle_name ? "error" : ""
                          }`}
                          name="vehicle_name"
                          placeholder="Enter Vehicle Name"
                          onChange={handlevehicle}
                          value={vehicle_value.vehicle_name}
                        />
                      </div>
                      {vehicle_error.vehicle_name && (
                        <div className="d-flex justify-content-center">
                          <p className="error-messages">
                            {vehicle_error.vehicle_name}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Speed</b>
                        </label>
                        <input
                          type="text"
                          name="speed"
                          className={`form-control ${
                            vehicle_error.speed ? "error" : ""
                          }`}
                          placeholder="Enter Speed"
                          onChange={handlevehicle}
                          value={vehicle_value.speed}
                        />
                      </div>
                      {vehicle_error.speed && (
                        <div className="d-flex justify-content-center">
                          <p className="error-messages">
                            {vehicle_error.speed}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Position X</b>
                        </label>
                        <input
                          type="text"
                          name="position_x"
                          className={`form-control ${
                            vehicle_error.position_x ? "error" : ""
                          }`}
                          placeholder="Enter Position X"
                          onChange={handlevehicle}
                          value={vehicle_value.position_x}
                        />
                      </div>
                      {vehicle_error.position_x && (
                        <div className="d-flex justify-content-center">
                          <p className="error-messages">
                            {vehicle_error.position_x}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Position Y</b>
                        </label>
                        <input
                          type="text"
                          name="position_y"
                          className={`form-control ${
                            vehicle_error.position_y ? "error" : ""
                          }`}
                          placeholder="Enter Position Y"
                          onChange={handlevehicle}
                          value={vehicle_value.position_y}
                        />
                      </div>
                      {vehicle_error.position_y && (
                        <div className="d-flex justify-content-center">
                          <p className="error-messages">
                            {vehicle_error.position_y}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="mb-3">
                        <label className="form-label fs-0 text-white">
                          <b>Direction</b>
                        </label>
                        <select
                          name="direction"
                          className={`form-select ${
                            vehicle_error.direction ? "error" : ""
                          }`}
                          onChange={handlevehicle}
                          value={vehicle_value.direction}
                        >
                          <option value="">Select Direction</option>
                          <option value="Forward">Forward</option>
                          <option value="Backward">Backward</option>
                          <option value="Upward">Upward</option>
                          <option value="Downward">Downward</option>
                        </select>
                      </div>
                      {vehicle_error.direction && (
                        <div className="d-flex justify-content-center">
                          <p className="error-messages">
                            {vehicle_error.direction}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn1 m-1">
                      Submit
                    </button>

                    <button
                      type="button"
                      className="btn2 m-1"
                      onClick={handleCloseModal1}
                    >
                      Close
                    </button>
                  </div>
                </form>
                {console.log(vehicle_value_data)}
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal1 && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
