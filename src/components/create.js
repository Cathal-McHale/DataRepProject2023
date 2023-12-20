import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const toDo = {
      task: task,
      date: date,
    };

    axios.post('http://localhost:4000/api/tasks', toDo)
      .then(response => {
        console.log("Task added successfully:", response.data);
        // Reset form fields after successful submission
        setTask('');
        setDate('');
      })
      .catch(error => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div>
      <h2>Hello from Create Component!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add task: </label>
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => { setTask(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Add due date: </label>
          <input
            type="text"
            className="form-control"
            value={date}
            onChange={(e) => { setDate(e.target.value) }}
          />
        </div>
        <div>
          <input type="submit" value="Add Task" />
        </div>
      </form>
    </div>
  );
}

export default Create;
