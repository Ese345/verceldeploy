import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './IndividualPages/Home';
import StudentPage from './IndividualPages/StudentPage';
import StudentProfile from './IndividualPages/StudentProfile';
import Login from './LoginPages/Login';
import './App.css';
import StudentLogBook from './IndividualPages/StudentLogBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StudentLogBook" element={<StudentLogBook />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/StudentProfile" element={<StudentProfile student={studentData} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

// Sample data (Replace with actual data)
const studentData = {
  name: "David Johnson",
  course: "Computer Science",
  matric: "21CG111111",
  industrySupervisor: "Mr. Smith",
  schoolSupervisor: "Dr. Adams",
  company: "Tech Solutions Ltd."
};

export default App;