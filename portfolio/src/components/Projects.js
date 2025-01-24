import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "Acciccare",
      description: "A real-time accident detection system using sensor data and machine learning for motorcycle safety.",
      tech: "Python, Micropython, HTML5, CSS3, Javascript, Flutter, Arduino, React, Embedded C/C++, MySQL",
      duration: "Nov 2023 - Oct 2024",
      role: "Backend, UI Design, ML"
    },
    {
      title: "APEX",
      description: "An advanced AI assistant with speech recognition and natural language processing capabilities.",
      tech: "Python, OpenCV, Twilio, Speech Recognition, PyAutoGUI, Win10Toast",
      duration: "Dec 2023 - Mar 2024",
      role: "Solo Project"
    },
    {
      title: "YIELDIFY",
      description: "Smart agriculture system with plant disease detection, pest detection, and crop recommendation features.",
      tech: "Machine Learning, Mobile App Development, API Integration",
      duration: "May 2024 - Oct 2024",
      role: "Backend, UI Design, ML"
    },
    {
      title: "Noiceless (PATENTED)",
      description: "Communication solution for deaf and mute community using AR techniques.",
      tech: "Backend Development, ML Model, 3D Modeling, Blender",
      duration: "Sep 2024",
      role: "Backend, ML Model, 3D Model"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{project.duration}</Card.Subtitle>
                  <Card.Text>
                    {project.description}
                    <br />
                    <strong>Role:</strong> {project.role}
                    <br />
                    <strong>Technologies:</strong> {project.tech}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
