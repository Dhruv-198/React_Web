import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in technology and business leadership, John leads our company vision and strategy.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTkdul0wXCUuZ2YgMWlYUVkFti6rRCB2XMw&s"
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      bio: "Sarah brings 12+ years of software engineering expertise and drives our technological innovation.",
      image: "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg"
    },
    {
      name: "Michael Chen",
      position: "Design Director",
      bio: "Award-winning designer with a passion for creating beautiful, functional user experiences.",
      image: "https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg"
    },
    {
      name: "Emily Rodriguez",
      position: "Project Manager",
      bio: "Emily ensures all our projects are delivered on time and exceed client expectations.",
      image: "https://img.freepik.com/free-photo/smiley-businesswoman-posing-city-with-arms-crossed_23-2148767033.jpg"
    }
  ];

  // Company stats
  const companyStats = [
    {
      value: "10+",
      label: "Years Experience",
      icon: "bi-calendar-check"
    },
    {
      value: "250+",
      label: "Projects Completed",
      icon: "bi-trophy"
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: "bi-emoji-smile"
    },
    {
      value: "40+",
      label: "Team Members",
      icon: "bi-people"
    }
  ];

  return (
    <div className="about-page">
      {/* Section 1: About Hero */}
      <section className="about-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-hero-content">
                <h1>About Us</h1>
                <p className="lead">Innovative solutions driven by passion and expertise</p>
                <p>
                  Horizon is a leading digital solutions company founded in 2014. We combine technical expertise with creative
                  thinking to help businesses transform and thrive in the digital world. Our team of dedicated professionals
                  is committed to delivering exceptional results for every client.
                </p>
                <Button variant="primary" size="lg" className="mt-4">Our Services</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-hero-image"></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Our Story */}
      <section className="our-story">
        <Container>
          <h2 className="section-title">Our Story</h2>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="story-image"></div>
            </Col>
            <Col lg={6}>
              <div className="story-content">
                <h3>From Humble Beginnings to Industry Leaders</h3>
                <p>
                  Founded in 2014 by a small team of technology enthusiasts, Horizon began as a web development startup
                  operating out of a small office space. Our founder's vision was to create a company that combined
                  technical excellence with genuine client relationships.
                </p>
                <p>
                  As we delivered successful projects and built our reputation, we expanded our services and team.
                  By 2018, we had grown to 25 employees and moved into our current headquarters. Today, we're proud
                  to be trusted by businesses across industries, from startups to enterprise organizations.
                </p>
                <p>
                  Throughout our growth, we've maintained our core values of innovation, quality, and client satisfaction.
                  Every project we undertake reflects our commitment to these principles.
                </p>
                <div className="story-milestones">
                  <div className="milestone">
                    <span className="milestone-year">2014</span>
                    <span className="milestone-event">Company Founded</span>
                  </div>
                  <div className="milestone">
                    <span className="milestone-year">2016</span>
                    <span className="milestone-event">Expanded Services</span>
                  </div>
                  <div className="milestone">
                    <span className="milestone-year">2018</span>
                    <span className="milestone-event">New Headquarters</span>
                  </div>
                  <div className="milestone">
                    <span className="milestone-year">2023</span>
                    <span className="milestone-event">International Expansion</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3: Company Stats */}
      <section className="company-stats">
        <Container>
          <h2 className="section-title">Our Growth Journey</h2>
          <Row>
            {companyStats.map((stat, index) => (
              <Col md={3} sm={6} key={index}>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 4: Our Team */}
      <section className="our-team">
        <Container>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="team-subtitle text-center">
            Our talented professionals bring diverse expertise and shared commitment to excellence
          </p>
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="team-member">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} className="img-fluid" />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="bio">{member.bio}</p>
                    <div className="member-social">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="team-cta text-center mt-5">
            <p className="mb-4">Interested in joining our team?</p>
            <Button variant="outline-primary" size="lg">View Career Opportunities</Button>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <Container>
          <div className="cta-content">
            <h2>Ready to work with our talented team?</h2>
            <p>Let's collaborate to bring your vision to life with our expertise and passion.</p>
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
                  <li><Link to="/ontact">Contact</Link></li>
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

export default About;