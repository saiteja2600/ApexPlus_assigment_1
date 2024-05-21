import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-4 ">
          <label htmlFor="" className="form-label text-white">
            Scenario
          </label>
          <select name="" id="" className="form-select">
            <option value="">Select Scenario</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
        <div className="col-12 mt-5">
          <table className="table table-striped table-hover w-100">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="text-white">
                  Vehicle Id
                </th>
                <th scope="col" className="text-white">
                  Vehicle Name
                </th>
                <th scope="col" className="text-white">
                  Position X
                </th>
                <th scope="col" className="text-white">
                  Position Y
                </th>
                <th scope="col" className="text-white">
                  Speed
                </th>
                <th scope="col" className="text-white">
                  Direction
                </th>
                <th scope="col" className="text-white">
                  Edit
                </th>
                <th scope="col" className="text-white">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Vehicle 1</td>
                <td>10</td>
                <td>10</td>
                <td>70</td>
                <td>East</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success m-1">Add Simulator</button>
            <button className="btn btn-primary m-1">End Simulator</button>
          </div>
        </div>
      </div>
      <div className="table_content mt-5"></div>
    </div>
  );
}
