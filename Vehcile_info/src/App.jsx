import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import {
  Home,
  Add_sceniaro,
  Add_entry,
  All_sceniaro,
} from "./Components/Pages";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-2 ">
          <Navbar />
        </div>
        <div className="col-7 m-auto mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/All Sceniaro" element={<All_sceniaro />} />
            <Route path="/Add Sceniaro" element={<Add_sceniaro />} />
            <Route path="/vehicles" element={<Add_entry />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
