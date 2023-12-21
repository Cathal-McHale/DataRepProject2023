import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEvent from './components/createEvent'; // Update import to use the CreateEvent component
import ViewEvent from './components/viewEvent'; // Update import to use the ViewEvent component
import UpdateEvent from './components/updateEvent'; // Update import to use the UpdateEvent component
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/createEvent">createEvent</Nav.Link> 
              <Nav.Link href="/viewEvent">viewEvent</Nav.Link> 
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/viewEvent' element={<ViewEvent></ViewEvent>}></Route> 
          <Route path='/createEvent' element={<CreateEvent></CreateEvent>}></Route>
          <Route path='/updateEvent/:id' element={<UpdateEvent></UpdateEvent>}></Route> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
