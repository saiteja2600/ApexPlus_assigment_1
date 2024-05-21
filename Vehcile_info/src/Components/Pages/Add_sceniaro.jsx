import { useState } from "react";
import "./Add_sceniaro.css";

export default function Add_sceniaro() {
  const [values, setValues] = useState({
    scenario_name: "",
    scenario_time: "",
  });
  const [scenario_values, setScenario_values] = useState([]);
  const [errors, setErrors] = useState({});

  function handleValidation(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let newErrors = { ...errors };
    if (name === "scenario_name") {
      if (!value) {
        newErrors.scenario_name = "Scenario name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        newErrors.scenario_name = "Only letters are allowed";
      } else if (value.length <= 3 || value.length >= 30) {
        newErrors.scenario_name =
          "scenario name must between 3 and 30 character";
      } else {
        delete newErrors.scenario_name;
      }
    }

    if (name === "scenario_time") {
      if (!value) {
        newErrors.scenario_time = "Scenario time is required";
      } else if (!/^\d+$/.test(value)) {
        newErrors.scenario_time = "Scenario time must be a number";
      } else if (parseInt(value) < 5 || parseInt(value) > 86400) {
        newErrors.scenario_time = "Scenario time must 5 and 86400 seconds";
      } else {
        delete newErrors.scenario_time;
      }
    }

    setErrors(newErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let formIsValid = true;
    let newErrors = {};

    if (!values.scenario_name) {
      formIsValid = false;
      newErrors.scenario_name = "Scenario name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(values.scenario_name)) {
      formIsValid = false;
      newErrors.scenario_name = "Only letters are allowed";
    } else if (
      values.scenario_name.length <= 3 ||
      values.scenario_name.length > 20
    ) {
      formIsValid = false;
      newErrors.scenario_name = "scenario name must between 3 and 30 character";
    }

    if (!values.scenario_time) {
      formIsValid = false;
      newErrors.scenario_time = "Scenario time is required";
    } else if (!/^\d+$/.test(values.scenario_time)) {
      formIsValid = false;
      newErrors.scenario_time = "Scenario time must be a number";
    } else if (
      parseInt(values.scenario_time) < 5 ||
      parseInt(values.scenario_time) > 86400
    ) {
      formIsValid = false;
      newErrors.scenario_time = "Scenario time must 5 and 86400 seconds";
    }

    setErrors(newErrors);

    if (formIsValid) {
      setScenario_values([...scenario_values, values]);
      setValues({ scenario_name: "", scenario_time: "" });
    }
  }

  function handleReset() {
    setValues({ scenario_name: "", scenario_time: "" });
    setErrors({});
  }

  return (
    <div className="container mt-5 p-3">
      <div className="breadcrumb text-white">
        <h5 className="breadcrumb-item">Scenario/add</h5>
      </div>
      <div className="title">
        <h4 className="text-white">Add Scenario</h4>
      </div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="card bg-dark shadow">
          <div className="card-body m-5">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    <b>Scenario Name</b>
                  </label>
                  <input
                    type="text"
                    name="scenario_name"
                    className={`form-control ${
                      errors.scenario_name ? "error" : ""
                    }`}
                    placeholder="Enter Scenario Name"
                    onChange={handleValidation}
                    value={values.scenario_name}
                  />
                  {errors.scenario_name && (
                    <div className="d-flex justify-content-center align-items-center mt-3">
                      <p className="error-messages">{errors.scenario_name}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="" className="form-label text-white fs-0">
                    <b>Scenario Time (Seconds)</b>
                  </label>
                  <input
                    type="text"
                    name="scenario_time"
                    className={`form-control ${
                      errors.scenario_time ? "error" : ""
                    }`}
                    placeholder="Enter Scenario Time"
                    onChange={handleValidation}
                    value={values.scenario_time}
                  />
                  {errors.scenario_time && (
                    <div className="d-flex justify-content-center align-items-center mt-3">
                      <p className="error-messages">{errors.scenario_time}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3">
          <button className="btn1 m-1" type="submit">
            Add
          </button>
          <button className="btn2 m-1" type="reset">
            Reset
          </button>
          <button className="btn3 m-1" type="button">
            Go Back
          </button>
        </div>
      </form>
      {console.log(scenario_values)}
    </div>
  );
}
