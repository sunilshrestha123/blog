import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpg';
import image3 from '../image/image3.jpg';

export default function Slide() {
  return (
    <>
      <Carousel data-bs-theme=' '>
        <Carousel.Item>
          <img className='d-block w-100' src={image1} alt='First slide' />
          <Carousel.Caption>
            <h5>We Are hiring </h5>
            <p>
              We are hiring both skilled and unskilled worker for foreign
              employment
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={image2} alt='Second slide' />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={image3} alt='Third slide' />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
