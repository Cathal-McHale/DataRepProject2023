import ToDoTask from "./todoTask";

function ToDo(props) {
    return props.myTask.map((task) => {
        return <ToDoTask myTask={task} key={task._id} Reload={() => { props.ReloadData(); }} />;
    });
}

export default ToDo;
