
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';


export default function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Shop Trucho</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto gap-2 ">

                        <NavLink
                            className={({ isActive }) => `text-decoration-none ${isActive ? "text-danger" : null}`}

                            to={"/"} > Home</NavLink>
                        <NavLink
                            className={({ isActive }) => `text-decoration-none ${isActive ? "text-danger" : null}`}
                            to="/cart">Cart</NavLink>
                        <NavLink
                            className={({ isActive }) => `text-decoration-none ${isActive ? "text-danger" : null}`}
                            to="/about">About</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

