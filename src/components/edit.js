import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  let { id } = useParams();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/tasks/${id}`)
      .then((response) => {
        setTask(response.data.title);
        setDate(response.data.date);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      title: task || '', // Ensure it's not undefined
      date: date,
    };

    axios.put(`http://localhost:4000/api/tasks/${id}`, updatedTask)
      .then((res) => {
        navigate('/read');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Hello from Edit component!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Edit tasks: </label>
          <input
            type="text"
            className="form-control"
            value={task || ''}
            onChange={(e) => { setTask(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Edit due date: </label>
          <input
            type="text"
            className="form-control"
            value={date || ''}
            onChange={(e) => { setDate(e.target.value) }}
          />
        </div>
        <div>
          <input type="submit" value="Edit Task" />
        </div>
      </form>
    </div>
  );
}
