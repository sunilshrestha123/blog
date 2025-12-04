import React from 'react';
import About from '../Photos/Aboutus.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Aboutus = () => {
  return (
    <div>
      <img
        src={About}
        alt='About Us'
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h1>Full Name</h1>
        <h3>Short Note</h3>
        <h2>
          <b>About Me</b>
        </h2>
      </div>

      <Container style={{ marginTop: '40px' }}>
        <Row>
          <Col md={4}>
            <img
              src={About}
              alt='Profile'
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </Col>

          <Col md={8}>
            <p>
              Hello! It's me, Mina Tamang from Ilam district, located in the
              eastern part of Nepal. Ilam is surrounded by beautiful mountains
              and is mostly popular for tea leaf production. Hello! It's me,
              Mina Tamang from Ilam district, located in the eastern part of
              Nepal. Ilam is surrounded by beautiful mountains and is mostly
              popular for tea leaf production. Hello! It's me, Mina Tamang from
              Ilam district, located in the eastern part of Nepal. Ilam is
              surrounded by beautiful mountains and is mostly popular for tea
              leaf production.
            </p>
          </Col>
        </Row>

        <Row style={{ marginTop: '20px' }}>
          <Col>
            <p>
              Hello! It's me, Mina Tamang from Ilam district, located in the
              eastern part of Nepal. Ilam is surrounded by beautiful mountains
              and is mostly popular for tea leaf production. Hello! It's me,
              Mina Tamang from Ilam district, located in the eastern part of
              Nepal. Ilam is surrounded by beautiful mountains and is mostly
              popular for tea leaf production. Hello! It's me, Mina Tamang from
              Ilam district, located in the eastern part of Nepal. Ilam is
              surrounded by beautiful mountains and is mostly popular for tea
              leaf production.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aboutus;
