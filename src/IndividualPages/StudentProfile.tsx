import "../CSS/StudentProfile.css";
import CU_LOGO from "../assets/CU_LOGO.jpg";

interface StudentProfileProps {
  student: {
    name: string;
    course: string;
    matric: string;
    industrySupervisor: string;
    schoolSupervisor: string;
    company: string;
  };
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <>
      <header className="student-profile-header">
        <div className="profile-logo-container">
          <img src={CU_LOGO} alt="CU Logo" className="logo" />
          <h1 className="profile-logo-title">COVENANT UNIVERSITY SIWES E-LOGBOOK</h1>
        </div>
      </header>
      <button className="back-btn" onClick={() => window.history.back()}>"Back"</button>
      <div className="profile-container">
        <h2>Student Profile</h2>
        <div className="profile-field">
          <label>Name:</label>
          <p>{student.name}</p>
        </div>
        <div className="profile-field">
          <label>Matric No:</label>
          <p>{student.matric}</p>
        </div>
        <div className="profile-field">
          <label>Course:</label>
          <p>{student.course}</p>
        </div>
        <div className="profile-field">
          <label>Industry Supervisor:</label>
          <p>{student.industrySupervisor}</p>
        </div>
        <div className="profile-field">
          <label>School Supervisor:</label>
          <p>{student.schoolSupervisor}</p>
        </div>
        <div className="profile-field">
          <label>Company:</label>
          <p>{student.company}</p>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;