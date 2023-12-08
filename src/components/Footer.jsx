import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Row className="about-row">
        <Col md={{ span: 8, offset: 2 }}>
          <ol>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium iusto eum, debitis deleniti commodi nemo ipsam.
                Nulla pariatur deleniti cumque adipisci, asperiores, libero
                laudantium odio id soluta ipsam corporis.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium iusto eum, debitis deleniti commodi nemo ipsam.
                Nulla pariatur deleniti cumque adipisci, asperiores, libero
                laudantium odio id soluta ipsam corporis.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                praesentium iusto eum, debitis deleniti commodi nemo ipsam.
                Nulla pariatur deleniti cumque adipisci, asperiores, libero
                laudantium odio id soluta ipsam corporis.
              </p>
            </li>
          </ol>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            praesentium iusto eum, debitis deleniti commodi nemo ipsam. Nulla
            pariatur deleniti cumque adipisci, asperiores, libero laudantium
            odio id soluta ipsam corporis.
          </p>
        </Col>
      </Row>

      <Row className="info-section-row">
        <hr />
        <Col>
          <h6 className="info-heading">Shop</h6>
          <p>Store</p>
          <p>Kente</p>
          <p>Smock</p>
          <p>Kete</p>
        </Col>
        <Col>
          <h6 className="info-heading">Account</h6>
          <p>Manage your Profile</p>
          <p>Roots Store Account</p>
          <p>Roots Database</p>
        </Col>
        <Col>
          <h6 className="info-heading">For Businesses</h6>
          <p>Get an online Store</p>
          <p>Sell on Roots</p>
          <p>Buy on Roots</p>
        </Col>
        <Col>
          <h6 className="info-heading">Roots Values</h6>
          <p>Heritage</p>
          <p>Innovation</p>
          <p>Accessibility</p>
          <p>Education</p>
          <p>Privacy</p>
          <p>Trader Accountability</p>
        </Col>
      </Row>

      <Row className="justify-content-md-center landing-footer">
        <hr />
        <Col xs lg="3">
          <p>Copyright &copy; 2023 Roots Inc. All rights reserved.</p>
        </Col>
        <Col md="auto">
          <a href="jjj">
            <h6>
              Privacy Policy<span className="vertical-line"></span> Terms of Use
              <span className="vertical-line"></span> Sales and Refunds
              <span className="vertical-line"></span> Legal
              <span className="vertical-line"></span> Site Map
            </h6>
          </a>
        </Col>
        <Col xs lg="3">
          <p className="text-center">Accra, Ghana</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer