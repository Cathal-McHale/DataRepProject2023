import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // For accessing route parameters and navigation
import "react-datepicker/dist/react-datepicker.css";

// component for updating an event
function UpdateEvent() {
  // Extract the 'id' parameter from the route
  let { id } = useParams();
  
  // State variables to manage the form data
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  
  // Hook to enable navigation
  const navigate = useNavigate();

  // Fetch event details when the component mounts or 'id' changes
  useEffect(() => {
    axios.get(`http://localhost:4000/api/events/${id}`)
      .then((response) => {
        setEvent(response.data.event);
        setDate(response.data.date);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the updated event object
    const updatedEvent = {
      event: event || '', // Use default value if 'event' is false
      date: date,
    };

    // Send a request to update the event
    axios.put(`http://localhost:4000/api/events/${id}`, updatedEvent)
      .then((res) => {
        // Navigate to the 'viewEvent' page after  update
        navigate('/viewEvent');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Render the component
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Update Event</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Event: </label>
          <input
            type="text"
            className="form-control"
            value={event || ''}
            onChange={(e) => { setEvent(e.target.value) }}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Concert Date: </label>
          <input
            type="text"
            className="form-control"
            value={date || ''}
            onChange={(e) => { setDate(e.target.value) }}
            style={styles.input}
          />
        </div>
        <div>
          <button type="submit" style={styles.button}>Update Event</button>
        </div>
      </form>
    </div>
  );
}

// CSS styles
const styles = {
  container: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "auto",
    marginTop: "50px",
    width: "50%",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#007bff",
  },
};


export default UpdateEvent;
