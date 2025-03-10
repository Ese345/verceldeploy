import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/StudentPage.css';
import CU_LOGO from '../assets/CU_LOGO.jpg';

const StudentPage = () => {
    // Sample notices (these can be fetched from a backend later)
    const [notices] = useState([
        "📢 SIWES Report submission deadline is December 15, 2025.",
        "⚠️ Ensure your logbook is updated weekly to avoid penalties.",
        "📅 Next SIWES evaluation is scheduled for November 20, 2025."
    ]);

    return (
        <div className="student-page">
            {/* Navigation Header */}
            <header className="header" role="banner">
                <div className="logo-container">
                    <img src={CU_LOGO} alt="CU Logo" className="logo" />
                    <h1 className="logo-title">COVENANT UNIVERSITY SIWES E-LOGBOOK</h1>
                </div>
                <nav className="navbar">
                    <Link to="/StudentLogBook">Fill Logbook</Link>
                    <Link to="/StudentProfile">Profile</Link>
                    <Link to="/" className="logout-btn">Log Out</Link>
                </nav>
            </header>
            
            {/* Wrapper for Notice Board and Student Content */}
            <div className="student-notice-container">
                {/* Main Content Section */}
                <div className="container-Student">
                    <h1>Welcome to Your Student Dashboard</h1>
                    <p>Select an option from the menu to proceed.</p>
                </div>
                
                {/* Notice Board Section */}
                <div className="notice-board">
                    <h2>📌 Notice Board</h2>
                    {notices.length > 0 ? (
                        <ul>
                            {notices.map((notice, index) => (
                                <li key={index} className="notice-item">{notice}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-notice">No new notices at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentPage;
