import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="m-2 p-1">
        <Link style={{ textDecorationLine: 'none' }} to="/">
          <Navbar.Brand className="m-2 p-1" href="Nombre-empresa">Light-Vel</Navbar.Brand>
        </Link>
        <Nav className="me-auto m-2" >
          <NavLink className="m-2 p-1" style={{ textDecorationLine: 'none' }} to="/categoria/1" href="Veladores">Veladores</NavLink>
          <NavLink className="m-2 p-1" style={{ textDecorationLine: 'none' }}to="/categoria/2" href="LamparaPared">Lámparas de Pared</NavLink>
          <NavLink className="m-2 p-1" style={{ textDecorationLine: 'none' }}to="/categoria/3" href="LamparaExterior">Lamparas Exterior</NavLink>
          <NavLink className="m-2 p-1" style={{ textDecorationLine: 'none' }}to="/categoria/4" href="LamparaNordica">Lamparas Nordicas</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar 
