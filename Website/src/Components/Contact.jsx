import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import officeImage from '../Components/office-location.jpg';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would normally handle the form submission to a server
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will contact you soon.'
    });

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Office locations data
  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Tech City, CA 94043",
      phone: "+1 (555) 123-4567",
      email: "sf@horizon.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    {
      city: "New York",
      address: "456 Digital Avenue, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "nyc@horizon.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    {
      city: "London",
      address: "78 Tech Lane, London, UK SW1A 1AA",
      phone: "+44 20 1234 5678",
      email: "london@horizon.com",
      hours: "Monday - Friday: 9:00 AM - 5:30 PM"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What services does Horizon offer?",
      answer: "Horizon offers a comprehensive range of digital services including web development, mobile applications, cloud solutions, UI/UX design, and digital marketing strategies."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer customized pricing based on project requirements. This can be fixed-price for well-defined projects or time-and-materials for more flexible engagements. We're happy to provide a detailed quote after understanding your needs."
    },
    {
      question: "Do you offer maintenance and support after project completion?",
      answer: "Yes! We offer various maintenance packages to ensure your digital solutions remain secure, up-to-date, and operating optimally after launch."
    }
  ];

  return (
    <div className="contact-page">
      {/* Section 1: Contact Hero */}
      <section className="contact-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="contact-hero-content">
                <h1>Contact Us</h1>
                <p className="lead">Let's start a conversation</p>
                <p>
                  Have a question, project idea, or want to learn more about our services? We're here and ready to help.
                  Reach out to our team through any of our contact channels or use the form below, and we'll get back to you promptly.
                </p>
                <div className="contact-info-quick">
                  <div className="contact-info-item">
                    <i className="bi bi-envelope"></i>
                    <span>info@horizon.com</span>
                  </div>
                  <div className="contact-info-item">
                    <i className="bi bi-telephone"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-hero-image"></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Contact Form */}
      <section className="contact-form-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="contact-form-container">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below, and our team will get back to you within 24 hours.</p>

                {formStatus.submitted && (
                  <Alert variant={formStatus.error ? "danger" : "success"}>
                    {formStatus.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="contact-submit-btn">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>

            <Col lg={6}>
              <div className="contact-info-container">
                <div className="contact-map">
                  <div className="contact-map">
                    <img src={officeImage} alt="Our Office Location" className="location-image" />
                  </div>
                </div>
                <div className="contact-address">
                  <h3>Headquarters</h3>
                  <p>
                    <i className="bi bi-geo-alt"></i> 123 Innovation Drive, Tech City, CA 94043
                  </p>
                  <p>
                    <i className="bi bi-telephone"></i> +1 (555) 123-4567
                  </p>
                  <p>
                    <i className="bi bi-envelope"></i> info@horizon.com
                  </p>
                  <p>
                    <i className="bi bi-clock"></i> Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3: Office Locations */}
      <section className="office-locations">
        <Container>
          <h2 className="section-title">Our Offices</h2>
          <p className="locations-subtitle text-center">
            With offices around the world, we're ready to support your business wherever you are
          </p>

          <Row>
            {officeLocations.map((office, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div className="office-card">
                  <h3>{office.city}</h3>
                  <div className="office-details">
                    <p>
                      <i className="bi bi-geo-alt"></i> {office.address}
                    </p>
                    <p>
                      <i className="bi bi-telephone"></i> {office.phone}
                    </p>
                    <p>
                      <i className="bi bi-envelope"></i> {office.email}
                    </p>
                    <p>
                      <i className="bi bi-clock"></i> {office.hours}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 4: FAQ */}
      <section className="contact-faq">
        <Container>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <Row>
            {faqs.map((faq, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <div className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="more-questions text-center mt-4">
            <p>Don't see your question here?</p>
            <Button variant="outline-primary">View All FAQs</Button>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="contact-cta">
        <Container>
          <div className="cta-content">
            <h2>Let's build something amazing together</h2>
            <p>Ready to transform your business with innovative digital solutions? We're just a click away.</p>
            <Button as={Link} to="/services" variant="light" size="lg" className="cta-button">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <div className="footer-about">
                <h3>Horizon</h3>
                <p>
                  Creating innovative digital solutions to help businesses thrive in the digital age.
                </p>
                <div className="social-links">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6}>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/Service">Service</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><Link to="/Service">Web Development</Link></li>
                  <li><Link to="/Service">Mobile Applications</Link></li>
                  <li><Link to="/Service">Cloud Solutions</Link></li>
                  <li><Link to="/Service">UI/UX Design</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <i className="bi bi-geo-alt"></i> 123 Innovation Drive, Tech City, CA 94043
                </p>
                <p>
                  <i className="bi bi-envelope"></i> info@horizon.com
                </p>
                <p>
                  <i className="bi bi-telephone"></i> +1 (555) 123-4567
                </p>
              </div>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Horizon. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Contact;