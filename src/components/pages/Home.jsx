import React from 'react';
import Slide from './Slide';
import Badge from './Badge';
import { Container, Row, Col } from 'react-bootstrap';
import Timeline from '../timeline/Timeline';

export default function Home() {
  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <Slide />
      </div>
      <div style={{ margin: '10px', padding: '5px', width: '100%' }}>
        <h2>Blogging Content</h2>
        <Badge />
      </div>
      <div style={{ margin: '20px', padding: '5px' }}>
        <h2>Adbout Me </h2>
        <p>
          Lorem Ipsum comes from a latin text written in 45BC by Roman
          statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.
          The text is titled "de Finibus Bonorum et Malorum" which means "The
          Extremes of Good and Evil". The most common form of Lorem ipsum is the
          following: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. The text is a
          corrupted version of the original and therefore does not mean anything
          in particular. The book however where it originates discusses the
          philosophical views of Epicureanism, Stoicism, and the Platonism of
          Antiochus of Ascalon. Lorem ipsum is widely in use since the 14th
          century and up to today as the default dummy "random" text of the
          typesetting and web development industry. In fact not only it has
          survived the test of time but it thrived and can be found in many
          software products, from Microsoft Word to WordPress.
        </p>
      </div>
      <div
        style={{ backgroundColor: '#F55190', width: '100%', height: '350px' }}
      >
        <Container>
          <Row>
            <Col>
              <h1
                style={{
                  color: 'white',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                Video Gallary
              </h1>
              <h2 style={{ color: 'white', textAlign: 'center' }}>
                My Introduction Video{' '}
              </h2>
            </Col>
            <Col>
              <iframe
                width='500'
                height='350'
                src='https://www.youtube.com/embed/tgbNymZ7vqY'
              ></iframe>
            </Col>{' '}
          </Row>
        </Container>
      </div>
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
      </Container>
      <div
        style={{
          margin: '5px 0px 5px 0px ',
          padding: '20px',
          backgroundColor: '#f0efeb',
          height: '350px',
          width: '100%',
        }}
      >
        <h1>Message form friends and family</h1>
      </div>
      <Timeline />
    </div>
  );
}
