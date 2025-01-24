import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const certifications = [
    {
      title: "Programming in Python for Data Science",
      issuer: "IBM"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM (Coursera)"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford and Deeplearning"
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Stanford and Deeplearning"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Udemy"
    },
    {
      title: "Programming in C",
      issuer: "NPTEL"
    }
  ];

  return (
    <section className="certifications-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">
          <FontAwesomeIcon icon={faCertificate} className="me-3" />
          Certifications
        </h2>
        <Row className="justify-content-center">
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="certification-card h-100 shadow-sm border-0 hover-effect">
                <Card.Body className="p-4">
                  <div className="certificate-icon mb-3">
                    <FontAwesomeIcon icon={faCertificate} className="text-primary" size="2x" />
                  </div>
                  <h4 className="h5 mb-3">{cert.title}</h4>
                  <p className="text-muted mb-0">
                    Issued by: <strong>{cert.issuer}</strong>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
