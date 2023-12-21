import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Event Manager</h1>
      <p>Discover and manage your events efficiently!</p>

      {/* Slideshow */}
      <Carousel showThumbs={true} className="mb-4">
        <div>
          <img alt="Event 1" src="my-app/02.jpg" />
        </div>
        <div>
          <img alt="Event 2" src="my-app/ziggo.jpg" />
        </div>
        {/* Add more slides as needed */}
      </Carousel>

      {/* Greeting Cards */}
      <div className="card-deck">
        <Card style={styles.card}>
          <Card.Body>
            <Card.Title>Create Event</Card.Title>
            <Card.Text>
              Click below to create a new event.
            </Card.Text>
            <Link to="/createEvent">
              <Button variant="primary">Create Event</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={styles.card}>
          <Card.Body>
            <Card.Title>View Events</Card.Title>
            <Card.Text>
              Click below to view your events.
            </Card.Text>
            <Link to="/viewEvent">
              <Button variant="primary">View Events</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

// CSS styles
const styles = {
  card: {
    boxShadow: '10 40px 80px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px',
  },
};

export default Home;
