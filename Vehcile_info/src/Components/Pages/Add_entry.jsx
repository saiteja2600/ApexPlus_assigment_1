import { useState } from "react";
import "./Add_entry.css";

export default function Add_entry() {
  const [values, setValues] = useState({
    scenioro_list: "",
    vehicle_name: "",
    speed: "",
    position_x: "",
    position_y: "",
    direction: "",
  });
  const [vehicle_values, setVehicle_values] = useState([]);
  const [errors, setErrors] = useState({});

  function handleValidate(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let newErrors = { ...errors };

    if (name === "scenioro_list") {
      if (!value) {
        newErrors.scenioro_list = "Scenario list is required";
      } else {
        delete newErrors.scenioro_list;
      }
    }

    if (name === "vehicle_name") {
      if (!value) {
        newErrors.vehicle_name = "Vehicle name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        newErrors.vehicle_name = "Only alphabets accepted";
      } else if (value.length < 3 || value.length > 20) {
        newErrors.vehicle_name =
          "Vehicle name must be between 3 and 20 characters";
      } else {
        delete newErrors.vehicle_name;
      }
    }

    if (name === "speed") {
      if (!value) {
        newErrors.speed = "Speed is required";
      } else if (!/^\d+$/.test(value)) {
        newErrors.speed = "Speed must be a number";
      } else if (parseInt(value) <= 0 || parseInt(value) >= 200) {
        newErrors.speed = "Speed must be between 1 and 199";
      } else {
        delete newErrors.speed;
      }
    }

    if (name === "position_x") {
      if (!value) {
        newErrors.position_x = "Position x is required";
      } else if (!/^\d+$/.test(value)) {
        newErrors.position_x = "Position x must be a number";
      } else if (parseInt(value) < 0 || parseInt(value) > 8000) {
        newErrors.position_x = "Position x must be between 0 and 8000";
      } else {
        delete newErrors.position_x;
      }
    }

    if (name === "position_y") {
      if (!value) {
        newErrors.position_y = "Position y is required";
      } else if (!/^\d+$/.test(value)) {
        newErrors.position_y = "Position y must be a number";
      } else if (parseInt(value) < 0 || parseInt(value) > 8000) {
        newErrors.position_y = "Position y must be between 0 and 8000";
      } else {
        delete newErrors.position_y;
      }
    }

    if (name === "direction") {
      if (!value) {
        newErrors.direction = "Direction is required";
      } else {
        delete newErrors.direction;
      }
    }

    setErrors(newErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = {};

    if (!values.scenioro_list) {
      formIsValid = false;
      newErrors.scenioro_list = "Scenario list is required";
    }

    if (!values.vehicle_name) {
      formIsValid = false;
      newErrors.vehicle_name = "Vehicle name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(values.vehicle_name)) {
      formIsValid = false;
      newErrors.vehicle_name = "Only alphabets accepted";
    } else if (
      values.vehicle_name.length < 3 ||
      values.vehicle_name.length > 20
    ) {
      formIsValid = false;
      newErrors.vehicle_name =
        "Vehicle name must be between 3 and 20 characters";
    }

    if (!values.speed) {
      formIsValid = false;
      newErrors.speed = "Speed is required";
    } else if (!/^\d+$/.test(values.speed)) {
      formIsValid = false;
      newErrors.speed = "Speed must be a number";
    } else if (parseInt(values.speed) <= 0 || parseInt(values.speed) >= 200) {
      formIsValid = false;
      newErrors.speed = "Speed must be between 1 and 199";
    }

    if (!values.position_x) {
      formIsValid = false;
      newErrors.position_x = "Position x is required";
    } else if (!/^\d+$/.test(values.position_x)) {
      formIsValid = false;
      newErrors.position_x = "Position x must be a number";
    } else if (
      parseInt(values.position_x) < 0 ||
      parseInt(values.position_x) > 8000
    ) {
      formIsValid = false;
      newErrors.position_x = "Position x must be between 0 and 8000";
    }

    if (!values.position_y) {
      formIsValid = false;
      newErrors.position_y = "Position y is required";
    } else if (!/^\d+$/.test(values.position_y)) {
      formIsValid = false;
      newErrors.position_y = "Position y must be a number";
    } else if (
      parseInt(values.position_y) < 0 ||
      parseInt(values.position_y) > 8000
    ) {
      formIsValid = false;
      newErrors.position_y = "Position y must be between 0 and 8000";
    }

    if (!values.direction) {
      formIsValid = false;
      newErrors.direction = "Direction is required";
    }

    setErrors(newErrors);

    if (formIsValid) {
      setVehicle_values([...vehicle_values, values]);
      setValues({
        scenioro_list: "",
        vehicle_name: "",
        speed: "",
        position_x: "",
        position_y: "",
        direction: "",
      });
    }
  }

  function handleReset() {
    setValues({
      scenioro_list: "",
      vehicle_name: "",
      speed: "",
      position_x: "",
      position_y: "",
      direction: "",
    });
    setErrors({});
  }

  return (
    <div className="container mt-5 p-3">
      <div className="breadcrumb text-white">
        <h5 className="breadcrumb-item">Vehicles/add</h5>
      </div>
      <div className="title">
        <h4 className="text-white">Add vehicles</h4>
      </div>
      <form
        action=""
        method="post"
        className="forminfo"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className="card bg-dark shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    Scenario List
                  </label>
                  <select
                    name="scenioro_list"
                    className={`form-select ${
                      errors.scenioro_list ? "error" : ""
                    }`}
                    onChange={handleValidate}
                    value={values.scenioro_list}
                  >
                    <option value="">Select Scenario</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                </div>
                {errors.scenioro_list && (
                  <div className="d-flex justify-content-center mt-2">
                    <p className="error-messages">{errors.scenioro_list}</p>
                  </div>
                )}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    Vehicle Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.vehicle_name ? "error" : ""
                    }`}
                    placeholder="Enter Vehicle Name"
                    name="vehicle_name"
                    onChange={handleValidate}
                    value={values.vehicle_name}
                  />
                </div>
                {errors.vehicle_name && (
                  <div className="d-flex justify-content-center mt-2">
                    <p className="error-messages">{errors.vehicle_name}</p>
                  </div>
                )}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    Speed
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.speed ? "error" : ""}`}
                    placeholder="Enter Speed"
                    name="speed"
                    onChange={handleValidate}
                    value={values.speed}
                  />
                </div>
                {errors.speed && (
                  <div className="d-flex justify-content-center mt-2">
                    <p className="error-messages">{errors.speed}</p>
                  </div>
                )}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    Position X
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.position_x ? "error" : ""
                    }`}
                    placeholder="Enter Position X"
                    name="position_x"
                    onChange={handleValidate}
                    value={values.position_x}
                  />
                </div>
                {errors.position_x && (
                  <div className="d-flex justify-content-center mt-2">
                    <p className="error-messages">{errors.position_x}</p>
                  </div>
                )}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    Position Y
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.position_y ? "error" : ""
                    }`}
                    placeholder="Enter Position Y"
                    name="position_y"
                    onChange={handleValidate}
                    value={values.position_y}
                  />
                </div>
                {errors.position_y && (
                  <div className="d-flex justify-content-center mt-2">
                    <p className="error-messages">{errors.position_y}</p>
                  </div>
                )}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    Direction
                  </label>
                  <select
                    name="direction"
                    className={`form-select ${errors.direction ? "error" : ""}`}
                    onChange={handleValidate}
                    value={values.direction}
                  >
                    <option value="">Select Direction</option>
                    <option value="Forward">Forward</option>
                    <option value="Backward">Backward</option>
                    <option value="Upward">Upward</option>
                    <option value="Downward">Downward</option>
                  </select>
                </div>
                {errors.direction && (
                  <div className="d-flex justify-content-center mt-2">
                    <p className="error-messages">{errors.direction}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="m-3">
          <button type="submit" className="btn1  m-1">
            Add
          </button>
          <button type="reset" className="btn2 m-1">
            Reset
          </button>
          <button type="button" className="btn3 m-1">
            Go Back
          </button>
        </div>
      </form>
      {console.log(vehicle_values)}
    </div>
  );
}
