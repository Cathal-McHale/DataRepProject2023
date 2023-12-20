import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ToDoTask(props) {
    return (
        <div>
            <Card>
                <Card.Header>{props.myTask.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <footer>
                            {props.myTask.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={`/edit/${props.myTask._id}`} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={() => props.handleDelete(props.myTask._id)}>Delete task</Button>
            </Card>
        </div>
    );
}

export default ToDoTask;
