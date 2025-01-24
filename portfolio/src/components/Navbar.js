import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <Navbar 
        expand="lg" 
        className={`fixed-top ${scrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={isActive('/') ? 'active' : ''}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/projects" 
                className={isActive('/projects') ? 'active' : ''}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/skills" 
                className={isActive('/skills') ? 'active' : ''}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/education" 
                className={isActive('/education') ? 'active' : ''}
              >
                Education
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/certifications" 
                className={isActive('/certifications') ? 'active' : ''}
              >
                Certifications
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
