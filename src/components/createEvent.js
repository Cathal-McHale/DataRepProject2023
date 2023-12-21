import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateEvent() {
  const [event, setEvent] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    const toDo = {
      event: event,
      date: date,
    };

    axios.post('http://localhost:4000/api/events', toDo)
      .then(response => {
        console.log("Event added successfully:", response.data);
        // Reset form fields after successful submission
        setEvent('');
        setDate(new Date());
      })
      .catch(error => {
        console.error("Error adding event:", error);
      });
  };

  return (
    <div style={styles.container}>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="event" style={styles.label}>Event:</label>
          <input
            type="text"
            style={styles.input}
            id="event" // <-- Ensure this id matches the 'for' attribute of the label
            value={event}
            onChange={(e) => { setEvent(e.target.value) }}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="date" style={styles.label}>Event Date:</label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            dateFormat="yyyy-MM-dd"
            style={styles.input}
            id="date" // <-- Ensure this id matches the 'for' attribute of the label
          />
        </div>
        <div>
          <button type="submit" style={styles.button}>Add Event</button>
        </div>
      </form>

    </div>
  );
}

// CSS styles
const styles = {
  container: {
    backgroundColor: "#ffffff", // White background for the container
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Subtle box shadow
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
    backgroundColor: "#007bff", // Bootstrap primary color
    color: "#fff",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CreateEvent;
