import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const education = [
    {
      school: "Sri Eshwar College of Engineering",
      degree: "B.Tech Artificial Intelligence and Data Science",
      duration: "Jan 2023 - Jan 2027",
      location: "Coimbatore",
      achievement: "CGPA: 8.38"
    },
    {
      school: "JAWAHAR Mat.Hr.Sec School",
      degree: "HSC",
      duration: "Jan 2022 - Jan 2023",
      location: "Neyveli",
      achievement: "92%"
    },
    {
      school: "JAWAHAR Mat.Hr.Sec School",
      degree: "SSLC",
      duration: "Jan 2020 - Jan 2021",
      location: "Neyveli"
    }
  ];

  return (
    <section className="education-section py-5">
      <Container>
        <h2 className="text-center mb-5">
          <FontAwesomeIcon icon={faGraduationCap} className="me-3" />
          Education
        </h2>
        <Row className="justify-content-center">
          {education.map((edu, index) => (
            <Col md={8} className="mb-4" key={index}>
              <Card className="education-card h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h4 mb-0">{edu.school}</h3>
                    <span className="badge bg-primary">{edu.duration}</span>
                  </div>
                  <h4 className="h5 text-primary mb-3">{edu.degree}</h4>
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    {edu.location}
                  </p>
                  {edu.achievement && (
                    <p className="mb-0 text-success">
                      <strong>Achievement:</strong> {edu.achievement}
                    </p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
