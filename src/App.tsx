import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPages/Login";
import StudentPage from "./IndividualPages/StudentPage";
import "./App.css";
import Home from "./IndividualPages/Home";
import StudentLogBook from "./IndividualPages/StudentLogBook";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/Login" element={<Login />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/StudentLogBook" element={<StudentLogBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
