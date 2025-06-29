import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const TopNav = () =>{
    return(
        <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" id='homii'>Home |</Nav.Link> 
            <Nav.Link as={Link} to="insert" id='homii'>Insert |</Nav.Link>
            <Nav.Link as={Link} to="display" id='homii'>Display |</Nav.Link>
            <Nav.Link as={Link} to="search" id='homii'>Search |</Nav.Link>
            <Nav.Link as={Link} to="update" id='homii'>Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        </>
    )
}

export default TopNav