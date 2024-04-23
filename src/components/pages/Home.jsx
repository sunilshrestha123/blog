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
      <Container>
        <Row>
          <Col>
            <h2>Facebook</h2>
            <div>
              <div
                class='fb-page'
                data-href='https://www.facebook.com/mina.tamang.blog'
                data-tabs='timeline'
                data-width='350'
                data-height='450'
                data-small-header='true'
                data-adapt-container-width='true'
                data-hide-cover='false'
                data-show-facepile='true'
              >
                <blockquote
                  cite='https://www.facebook.com/mina.tamang.blog'
                  class='fb-xfbml-parse-ignore'
                >
                  <a href='https://www.facebook.com/mina.tamang.blog'>
                    Mina Tamang{' '}
                  </a>
                </blockquote>
              </div>
            </div>
          </Col>
          <Col>
            <h2>Twitter</h2>
          </Col>
        </Row>
        <div>
          <iframe
            width='420'
            height='345'
            src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
          ></iframe>
        </div>
      </Container>
      <div
        style={{
          width: '100%',
          backgroundColor: '#00B9E8',
          padding: '30px',
          margin: '0px',
        }}
      >
        <h1>social media icons</h1>
      </div>
      <Timeline />
    </div>
  );
}
