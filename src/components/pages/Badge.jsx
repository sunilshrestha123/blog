import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpg';

export default function Badge() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant='top' src={image2} />
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Read More ..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant='top' src={image2} />
              <Card.Body>
                <Card.Title>recruitment</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Read More ..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant='top' src={image1} />
              <Card.Body>
                <Card.Title>Job hunting</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Read More ..</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
