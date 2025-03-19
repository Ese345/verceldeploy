import React, { useState } from "react";
import "../CSS/IndustrySupervisor.css";

// Interface for logbook entries
interface LogEntry {
  date: string;
  workDone: string;
  challenges: string;
  attendance: boolean;
  comment: string;
}

// Props interface for IndustrySupervisor
interface IndustrySupervisorProps {
  student: {
    name: string;
    matric: string;
    course: string;
  };
  logbookEntries: LogEntry[];
}

const IndustrySupervisor: React.FC<IndustrySupervisorProps> = ({ student, logbookEntries }) => {
  const [entries, setEntries] = useState<LogEntry[]>(logbookEntries);

  // Handle comment change
  const handleCommentChange = (index: number, value: string) => {
    const updatedEntries = [...entries];
    updatedEntries[index].comment = value;
    setEntries(updatedEntries);
  };

  // Handle attendance marking
  const handleAttendanceChange = (index: number) => {
    const updatedEntries = [...entries];
    updatedEntries[index].attendance = !updatedEntries[index].attendance;
    setEntries(updatedEntries);
  };

  // Save changes (this can later be connected to an API)
  const handleSave = () => {
    console.log("Updated Logbook Entries:", entries);
    alert("Logbook entries updated successfully!");
  };

  return (
    <div className="supervisor-container">
      <header className="supervisor-header">
        <button className="back-btn" onClick={() => window.history.back()}>← Back</button>
        <h1>Industry Supervisor Panel</h1>
      </header>

      {/* Show student details */}
      <div className="student-info">
        <h2>Student Details</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Matric No:</strong> {student.matric}</p>
        <p><strong>Course:</strong> {student.course}</p>
      </div>

      <div className="logbook-section">
        <h2>Logbook Entries</h2>
        {entries.length > 0 ? (
          entries.map((entry, index) => (
            <div key={index} className="log-entry">
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Work Done:</strong> {entry.workDone}</p>
              <p><strong>Challenges:</strong> {entry.challenges}</p>

              {/* Attendance Checkbox */}
              <div className="attendance">
                <label>
                  <input
                    type="checkbox"
                    checked={entry.attendance}
                    onChange={() => handleAttendanceChange(index)}
                  />
                  Present
                </label>
              </div>

              {/* Comment Box */}
              <div className="comment-section">
                <label>Supervisor's Comment:</label>
                <textarea
                  value={entry.comment}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                  placeholder="Enter your comments here..."
                />
              </div>
            </div>
          ))
        ) : (
          <p>No logbook entries found.</p>
        )}
      </div>

      <button className="save-btn" onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default IndustrySupervisor;
