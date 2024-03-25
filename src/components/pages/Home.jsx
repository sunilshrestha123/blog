import React from 'react';
import Slide from './Slide';
import Badge from './Badge';
import { Container, Row, Col } from 'react-bootstrap';
import Timeline from '../timeline/Timeline';
export default function Home() {
  return (
    <div>
      <Slide />
      <Badge />
      <Timeline />
      <Container>
        <Row>
          <Col>
            <h2>Facebook</h2>
          </Col>
          <Col>
            <h2>Twitter</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
