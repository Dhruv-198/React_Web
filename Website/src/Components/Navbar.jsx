import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // This will close the navbar when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar 
      expand="lg" 
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`} 
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="brand-text">Aina Tech</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/Service" 
              className={`nav-link ${location.pathname === '/Service' ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;