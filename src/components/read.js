import React, { useEffect, useState } from "react";
import ToDoTask from "./todoTask";
import axios from "axios";

function Read() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/tasks');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleReload = async () => {
        await fetchData();
    };

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`http://localhost:4000/api/tasks/${taskId}`);
            handleReload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Hello from task Component!</h2>
            {data.map((task) => (
                <ToDoTask
                    key={task._id}
                    myTask={task}
                    ReloadData={handleReload}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default Read;
