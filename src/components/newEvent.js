import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function NewEvent(props) { 
    return (
        <div>
            <Card>
                <Card.Header>{props.myEvent.event}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    </blockquote>
                </Card.Body>
                <Link to={`/updateEvent/${props.myEvent._id}`} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={() => props.handleDelete(props.myEvent._id)}>Delete event</Button>
            </Card>
        </div>
    );
}

export default NewEvent; // Change export to use the updated component name
