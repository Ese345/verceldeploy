import { Link } from "react-router-dom";
import "../CSS/Home.css";
import CU_LOGO from "../assets/CU_LOGO.jpg";

const Home = () => {
  return (
    <div className="container-home">
      {/* Header Section */}
      <header className="Home-header">
        <div className="Home-logo-container">
          <img src={CU_LOGO} alt="CU Logo" className="Home-logo" />
          <h1>COVENANT UNIVERSITY E-SIWES PORTAL</h1>
        </div>
        {/* Navigation Bar */}
      </header>
      <nav className="Home-navbar">
        <Link to="/">Home</Link>
        <Link to="/StudentPage">Student </Link>
        <Link to="/SupervisorLogin">University-Based Supervisor</Link>
        <Link to="/IndustrySupervisor">Industry-Based Supervisor</Link>
        <Link to="/AdminLogin">Admin (University SIWES Coordinator)</Link>
      </nav>
      


      {/* Notification Area */}
      <div className="notification">
        <h3> FACTS ABOUT SIWES</h3>
        <ul>
          <li>SIWES was established in 1973 by the Industrial Training Fund (ITF) in Nigeria. </li>
          <li>It is a skill development program designed to expose students to the practical aspects of their field of study.</li>
          <li>SIWES is a mandatory program for students in tertiary institutions in Nigeria.</li>
        </ul>
        <h3> BENEFITS OF SIWES</h3>
        <ul>
          <li>Helps students understand real-world work environments and expectations.</li>
          <li>Enhances problem-solving, teamwork, and technical skills.</li>
          <li>Provides students with hands-on experience in their field of study.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;