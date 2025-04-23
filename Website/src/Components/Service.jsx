import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Services = () => {
  // Main services data
  const mainServices = [
    {
      title: "Web Development",
      description: "Creating responsive, user-friendly websites with modern technologies that engage your audience and drive conversions.",
      icon: "bi-code-slash"
    },
    {
      title: "Mobile Applications",
      description: "Building native and cross-platform mobile apps for iOS and Android that provide seamless user experiences.",
      icon: "bi-phone"
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive, engaging user experiences and interfaces that delight your customers and strengthen your brand.",
      icon: "bi-palette"
    },
    {
      title: "Cloud Solutions",
      description: "Leveraging cloud technologies for scalable, reliable infrastructure that grows with your business needs.",
      icon: "bi-cloud"
    },
    {
      title: "Data Analytics",
      description: "Transforming raw data into actionable business insights to help you make informed strategic decisions.",
      icon: "bi-bar-chart"
    },
    {
      title: "Cybersecurity",
      description: "Protecting your digital assets with comprehensive security solutions that keep your data safe and your customers' trust intact.",
      icon: "bi-shield-lock"
    }
  ];

  // Process steps
  const processSteps = [
    {
      title: "Discovery",
      description: "We start by understanding your business goals, challenges, and target audience to define project objectives.",
      icon: "bi-search",
      color: "#4d61fc"
    },
    {
      title: "Planning",
      description: "Our experts develop a detailed roadmap with timelines, deliverables, and resource allocation.",
      icon: "bi-clipboard-check",
      color: "#37b24d"
    },
    {
      title: "Development",
      description: "Our skilled team builds your solution with rigorous quality assurance throughout the process.",
      icon: "bi-code-square",
      color: "#f59f00"
    },
    {
      title: "Deployment",
      description: "We launch your solution and ensure everything runs smoothly in the production environment.",
      icon: "bi-rocket-takeoff",
      color: "#fd7e14"
    },
    {
      title: "Maintenance",
      description: "We provide ongoing support and updates to keep your solution running at peak performance.",
      icon: "bi-tools",
      color: "#ae3ec9"
    }
  ];

  return (
    <div className="services-page">
      {/* Section 1: Services Hero */}
      <section className="services-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="services-hero-content">
                <h1>Our Services</h1>
                <p className="lead">Comprehensive digital solutions tailored to your business needs</p>
                <p>
                  At Horizon, we offer a wide range of services designed to help your business thrive in the digital landscape. 
                  From web development to data analytics, our expert team delivers cutting-edge solutions that drive results.
                </p>
                <Button variant="primary" size="lg" className="mt-4">Get Started</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="services-hero-image"></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Main Services Grid */}
      <section className="main-services">
        <Container>
          <h2 className="section-title">What We Offer</h2>
          <Row>
            {mainServices.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="service-card">
                  <div className="service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button variant="outline-primary" className="service-btn">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 3: Our Process */}
      <section className="our-process">
        <Container>
          <h2 className="section-title">Our Process</h2>
          <p className="text-center process-subtitle">
            We follow a proven methodology to ensure successful project delivery
          </p>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-icon" style={{backgroundColor: step.color}}>
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: Technologies */}
      <section className="technologies">
        <Container>
          <h2 className="section-title">Technologies We Use</h2>
          <p className="text-center tech-subtitle">
            We leverage cutting-edge technologies to build powerful, scalable solutions
          </p>
          
          <Row className="tech-categories">
            <Col md={4}>
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-list">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-filetype-jsx"></i>
                    </div>
                    <span>React</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-filetype-js"></i>
                    </div>
                    <span>Angular</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-filetype-vue"></i>
                    </div>
                    <span>Vue.js</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-bootstrap"></i>
                    </div>
                    <span>Bootstrap</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-list">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-filetype-node"></i>
                    </div>
                    <span>Node.js</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-filetype-py"></i>
                    </div>
                    <span>Python</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-database"></i>
                    </div>
                    <span>MongoDB</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-database-fill"></i>
                    </div>
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="tech-category">
                <h3>DevOps</h3>
                <div className="tech-list">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-git"></i>
                    </div>
                    <span>Git</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-hdd-rack"></i>
                    </div>
                    <span>Docker</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-cloud-arrow-up"></i>
                    </div>
                    <span>AWS</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="bi bi-cloud-check"></i>
                    </div>
                    <span>Azure</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <Container>
          <div className="cta-content">
            <h2>Ready to elevate your digital presence?</h2>
            <p>Let's discuss how our services can transform your business.</p>
            <Button as={Link} to="/contact" variant="light" size="lg" className="cta-button">
              Schedule a Consultation
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
                  <li><Link to="/Service">Services</Link></li>
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

export default Services;