import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo.png';
import './NavBar.css'
const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar className="nav-bg text-center" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img width="150px" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"

            >
              <Nav.Link as={Link} to="/home" className="menu-color">Home</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="menu-color">Projects</Nav.Link>
              <Nav.Link as={Link} to="/services" className="menu-color">Services</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="menu-color">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about" className="menu-color">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="menu-color">Contact</Nav.Link>
              {
                !user.email &&  <Nav.Link as={Link} to="/login" className="menu-color">Log In</Nav.Link>
              }
     
             {
               user.email &&  <div className="a">
               <div className="d-flex align-items-center justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
 
                 {
                   user.photoURL ? <img className="userImg" src={user.photoURL} alt="" />: <div className="fs-5 rounded-circle border" style={{width:'35px', height:'35px'}}>
                     <i class="fas fa-user"></i>
                   </div>
                 }
               </div>

               <div className="offcanvas offcanvas-end text-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                 <div className="offcanvas-header">
                   <h5 id="offcanvasRightLabel">Profile</h5>
                   <button type="button" className="btn-close text-reset btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                 </div>
                 <div className="offcanvas-body">
                   <div className="a">
                     <Link to="/dashboard" className="fs-5 border py-1 d-inline-block mb-3 profile-menu-box">
                     <i className="fas fa-th-large"></i><p className="m-0">Dashboard</p>
                     </Link>
                     <br />
                     <Link onClick={logout} to="/" className="fs-5 border py-1 d-inline-block mb-3 profile-menu-box">
                     <i className="fas fa-sign-out-alt"></i><p className="m-0">Log Out</p>
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
             }





            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;