import React, { useEffect, useState } from "react";
import NewEvent from "./newEvent";
import axios from "axios";
// Add this global style to change for all
document.body.style.backgroundColor = "aqua"; 

function ViewEvent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {// Update the API endpoint to fetch events
      const response = await axios.get('http://localhost:4000/api/events'); 
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReload = async () => {
    await fetchData();
  };

  const handleDelete = async (eventId) => {
    try {// Update the API endpoint to delete events
      await axios.delete(`http://localhost:4000/api/events/${eventId}`); 
      handleReload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Event List</h2>
      {data.map((event) => (
        <NewEvent
          key={event._id}
          myEvent={event}
          ReloadData={handleReload}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

// CSS styles
const styles = {
  container: {
    // Bootstrap light background color
    backgroundColor: "yellow", 
    padding: "20px",
    borderRadius: "8px",
    // Subtle box shadow
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
    margin: "auto",
    marginTop: "50px",
    width: "50%",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    // Bootstrap primary color
    color: "#007bff", 
  },
};

export default ViewEvent;
