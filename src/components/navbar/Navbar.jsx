import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Navbar bg='dark' data-bs-theme='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>Mina Tamang </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href='#features'>
              <Link
                to='/aboutus'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontFamily: 'Arial',
                }}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link href=''>
              <Link
                to='/contact'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Contact us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/gallery'>Gallery</Link>
            </Nav.Link>
            <Nav.Link href='#pricing'>Contact </Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <div
              style={{
                position: 'absolute',
                right: 0,
                padding: 'inherit',
                margin: '5px',
              }}
            >
              <Button
                variant='success'
                type='submit'
                size='sm'
                style={{ padding: '2px', margin: '5px 5px 5px 5px' }}
              >
                Login
              </Button>
              <Button
                variant='primary'
                size='sm'
                style={{ padding: '2px', margin: '5px 5px 5px 5px' }}
              >
                Sign In{' '}
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
