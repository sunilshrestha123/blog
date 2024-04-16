import React from 'react';
import About from '../Photos/Aboutus.jpg';
import { Container, Row, Col } from 'react-bootstrap';
const Aboutus = () => {
  return (
    <div>
      <img
        src={About}
        alt='aboutus'
        style={{ width: '1300px', height: '600px' }}
      />

      <h2>
        <h1>Full name</h1>
        <h2>Short Note</h2>

        <b>About Me</b>
      </h2>
      <div>
        <Container>
          <Row>
            <Col>Image</Col>
            <Col>Content</Col>
          </Row>
        </Container>
        <p>
          Hello It's Me Mina Tamang form Ilam district which lies in estern part
          of the Nepal.Ilam is surrounded by the beautiful mountain .Mostly
          popular for tea leaf production. Hello It's Me Mina Tamang form Ilam
          district which lies in estern part of the Nepal.Ilam is surrounded by
          the beautiful mountain .Mostly popular for tea leaf production. Hello
          It's Me Mina Tamang form Ilam district which lies in estern part of
          the Nepal.Ilam is surrounded by the beautiful mountain .Mostly popular
          for tea leaf production.
        </p>
      </div>
      <div>
        <p>
          Hello It's Me Mina Tamang form Ilam district which lies in estern part
          of the Nepal.Ilam is surrounded by the beautiful mountain .Mostly
          popular for tea leaf production. Hello It's Me Mina Tamang form Ilam
          district which lies in estern part of the Nepal.Ilam is surrounded by
          the beautiful mountain .Mostly popular for tea leaf production. Hello
          It's Me Mina Tamang form Ilam district which lies in estern part of
          the Nepal.Ilam is surrounded by the beautiful mountain .Mostly popular
          for tea leaf production.
        </p>
      </div>
    </div>
  );
};
export default Aboutus;
