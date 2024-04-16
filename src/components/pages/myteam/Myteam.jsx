import React from 'react';
import './myteam.css';
import image1 from '../../image/image1.jpg';
const Myteam = () => {
  return (
    <div class='row'>
      <div class='column'>
        <div class='card'>
          <img src={image1} alt='Jane'></img>
          <div class='container'>
            <h2>Mina Tamang</h2>
            <p class='title'>CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button class='button'>Contact</button>
            </p>
          </div>
        </div>
      </div>

      <div class='column'>
        <div class='card'>
          <img src={image1} alt='Mike'></img>
          <div class='container'>
            <h2>Mike Ross</h2>
            <p class='title'>Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button class='button'>Contact</button>
            </p>
          </div>
        </div>
      </div>

      <div class='column'>
        <div class='card'>
          <img src={image1} alt='John'></img>
          <div class='container'>
            <h2>John Doe</h2>
            <p class='title'>Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button class='button'>Contact</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myteam;
