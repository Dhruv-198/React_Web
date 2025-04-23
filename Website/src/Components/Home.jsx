import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-content">
              <h1 className="hero-title">Building the Future</h1>
              <p className="hero-subtitle">
                We create innovative solutions for tomorrow's challenges
              </p>
              <Button variant="primary" className="hero-button" size="lg">
                Get Started
              </Button>
            </Col>
            <Col md={6} className="hero-image-container">
              <div className="hero-image"></div>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Features Section */}
      <section className="features-section">
        <Container>
          <h2 className="section-title">What We Offer</h2>
          <Row>
            <Col md={4}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>Cutting-edge solutions tailored to your needs</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h3>Growth</h3>
                <p>Strategies to help your business expand</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Security</h3>
                <p>Robust protection for your digital assets</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="services-image"></div>
            </Col>
            <Col lg={6}>
              <div className="services-content">
                <h2>Our Services</h2>
                <p>
                  We provide comprehensive digital solutions to help businesses thrive in the digital age.
                  From web development to cloud solutions, our expert team has got you covered.
                </p>
                <div className="services-list">
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Web Development</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Mobile Applications</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Cloud Solutions</span>
                  </div>
                  <div className="service-item">
                    <i className="bi bi-check-circle"></i>
                    <span>UI/UX Design</span>
                  </div>
                </div>
                <Button as={Link} to="/services" variant="outline-primary" className="mt-4">
                  Explore All Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Testimonials */}
      <section className="testimonials-section">
        <Container>
          <h2 className="section-title">What Our Clients Say</h2>
          <Row>
            <Col md={4}>
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <i className="bi bi-quote"></i>
                  <p>
                    Working with Horizon has been an absolute pleasure. Their team's expertise helped us transform our business digitally.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-info">
                    <h4>John Smith</h4>
                    <p>CEO, TechCorp</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <i className="bi bi-quote"></i>
                  <p>
                    The innovative solutions provided by Horizon have dramatically improved our customer engagement and satisfaction.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <p>Marketing Director, GrowthLabs</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <i className="bi bi-quote"></i>
                  <p>
                    Prompt, professional, and incredibly talented. Horizon delivered our project on time and exceeded all expectations.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-info">
                    <h4>Michael Lee</h4>
                    <p>CTO, InnovateCo</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>Ready to transform your business?</h2>
            <p>Let's work together to bring your vision to life.</p>
            <Button as={Link} to="/contact" variant="light" size="lg" className="cta-button">
              Get in Touch
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

export default Home;