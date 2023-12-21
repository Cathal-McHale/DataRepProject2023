import NewEvent from "./newEvent";

function ToDo(props) {
    // Map over each event in the 'myEvent' array
    return props.myEvent.map((event) => {
         // Render thes component for each event with necessary props
        return <NewEvent myEvent={event} key={event._id} Reload={() => { props.ReloadData(); }} />;
    });
}

export default ToDo;
