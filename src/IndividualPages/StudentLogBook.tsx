import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../CSS/StudentLogBook.css";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

type LogEntry = {
  weekNumber: number;
  startWeek: string;
  endWeek: string;
  activities: Record<DayOfWeek, string>;
  files: Record<DayOfWeek, File | null>;
};

const StudentLogBook: React.FC = () => {
  const navigate = useNavigate(); 
  const [weekCounter, setWeekCounter] = useState(1);
  const [logEntries, setLogEntries] = useState<LogEntry>({
    weekNumber: weekCounter,
    startWeek: "",
    endWeek: "",
    activities: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    },
    files: {
      Monday: null,
      Tuesday: null,
      Wednesday: null,
      Thursday: null,
      Friday: null,
      Saturday: null,
    },
  });

  const handleInputChange = (field: keyof LogEntry, value: string) => {
    setLogEntries((prev) => ({ ...prev, [field]: value }));
  };

  const handleDayChange = (day: DayOfWeek, value: string) => {
    setLogEntries((prev) => ({
      ...prev,
      activities: { ...prev.activities, [day]: value },
    }));
  };

  const handleFileUpload = (day: DayOfWeek, file: File | null) => {
    setLogEntries((prev) => ({
      ...prev,
      files: { ...prev.files, [day]: file },
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting Logbook:", logEntries);
      alert("Logbook Submitted Successfully!");

      setWeekCounter((prev) => prev + 1);
      setLogEntries({
        weekNumber: weekCounter + 1,
        startWeek: "",
        endWeek: "",
        activities: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
        },
        files: {
          Monday: null,
          Tuesday: null,
          Wednesday: null,
          Thursday: null,
          Friday: null,
          Saturday: null,
        },
      });
    } catch (error) {
      console.error("Error submitting logbook:", error);
      alert("Submission Failed. Try again.");
    }
  };

  return (
    

      <div className="logbook-content">
        <h1 className="text-xl font-bold mb-4">STUDENT LOGBOOK</h1>

        {/* Table 1 Container */}
        <div className="week-table-container flex justify-end mb-4 p-4 bg-white shadow rounded">
          <table className="border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Week No.</th>
                <th className="border p-2">Start Week</th>
                <th className="border p-2">End Week</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border p-2">{logEntries.weekNumber}</td>
                <td className="border p-2">
                  <input
                    type="date"
                    className="p-1 border rounded"
                    value={logEntries.startWeek}
                    onChange={(e) => handleInputChange("startWeek", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    className="p-1 border rounded"
                    value={logEntries.endWeek}
                    onChange={(e) => handleInputChange("endWeek", e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2: Daily Activities & File Upload */}
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Day</th>
              <th className="border p-2">Activity</th>
              <th className="border p-2">File Upload</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(logEntries.activities).map((day) => (
              <tr key={day} className="text-center">
                <td className="border p-2 font-semibold">{day}</td>
                <td className="border p-2">
                  <textarea
                    className="w-full p-1 border rounded"
                    rows={2}
                    value={logEntries.activities[day as DayOfWeek]}
                    onChange={(e) => handleDayChange(day as DayOfWeek, e.target.value)}
                    placeholder={`Activities for ${day}`}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="file"
                    className="p-1"
                    onChange={(e) =>
                      handleFileUpload(day as DayOfWeek, e.target.files ? e.target.files[0] : null)
                    }
                    title={`Upload file for ${day}`}
                  />
                  {logEntries.files[day as DayOfWeek] && (
                    <a
                      href={URL.createObjectURL(logEntries.files[day as DayOfWeek]!)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 underline mt-1"
                    >
                      View File
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button onClick={() => navigate("/studentPage")} className="Back">
            Back
          </button>
          <button onClick={handleSubmit} className="Submit">
            Submit
          </button>
        </div>
      </div>
  );
};

export default StudentLogBook;
