import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="home-section min-vh-100 d-flex align-items-center">
      <div className="section-overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-3">
                Hi, I'm <span className="highlight">Harish R</span>
              </h1>
              <h2 className="hero-subtitle mb-4">
                Aspiring Data Scientist & AI Developer
              </h2>
              <p className="hero-text mb-4">
                Passionate about Machine Learning, Data Science, and creating innovative solutions.
                Currently pursuing B.Tech in Artificial Intelligence and Data Science at Sri Eshwar College of Engineering.
              </p>
              <div className="contact-info mb-4">
                <motion.p 
                  className="mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <a href="tel:+918807639930" className="contact-link">
                    +91 8807639930
                  </a>
                </motion.p>
                <motion.p 
                  className="mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <a href="mailto:harish.r2023ai-ds@sece.ac.in" className="contact-link">
                    harish.r2023ai-ds@sece.ac.in
                  </a>
                </motion.p>
              </div>
              <div className="social-links mb-4">
                <motion.a 
                  href="https://github.com/Harish24-10-2005" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button me-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  GitHub
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/harish-r-12372b28b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                  LinkedIn
                </motion.a>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="custom-button"
                  href="/about"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-container"
            >
              {/* Add your image or illustration here */}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
