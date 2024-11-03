// src/components/StudentDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentDashboard = () => {
  const [assessments, setAssessments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await axios.get('/api/assessments');
        setAssessments(response.data);
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    };

    fetchAssessments();
  }, []);

  const handleTakeAssessment = (assessmentId) => {
    navigate(`/assessment/${assessmentId}`);
  };

  return (
    <div className="container mt-5">
      <h2>Student Dashboard - Take Assessment</h2>
      <ul className="list-group mt-3">
        {assessments.map((assessment) => (
          <li key={assessment.id} className="list-group-item d-flex justify-content-between align-items-center">
            {assessment.title} - Due: {new Date(assessment.dueDate).toLocaleDateString()}
            <button className="btn btn-primary" onClick={() => handleTakeAssessment(assessment.id)}>
              Start Assessment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
