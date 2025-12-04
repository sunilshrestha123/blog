import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <div>
        <footer class='footer'>
          <div class='container'>
            <div class='row'>
              <div class='footer-col'>
                <h4>company</h4>
                <ul>
                  <li>
                    <Link to='/home'>Home</Link>
                  </li>
                  <li>
                    <Link to='/aboutus'>About Me</Link>
                  </li>
                  <li>
                    <Link to='/gallery'>Gallery</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact Us</Link>
                  </li>
                  <li>
                    <Link to='/myteam'>My Team</Link>
                  </li>
                </ul>
              </div>
              <div class='footer-col'>
                <h4>Blog</h4>
                <ul>
                  <li>
                    <Link href='#'>Travel</Link>
                  </li>
                  <li>
                    <Link href='#'>Lifestyle</Link>
                  </li>
                  <li>
                    <Link href='#'>Personal Development</Link>
                  </li>
                  <li>
                    <Link href='#'>Technology</Link>
                  </li>
                  <li>
                    <Link href='#'>Foods</Link>
                  </li>
                </ul>
              </div>
              <div class='footer-col'>
                <h4>Nature</h4>
                <ul>
                  <li>
                    <Link href='#'>NEPAL Adventure</Link>
                  </li>
                  <li>
                    <Link href='#'>NEPAL TOP SIDE TO VIST</Link>
                  </li>
                  <li>
                    <Link href='#'>Culture</Link>
                  </li>
                  <li>
                    <Link href='#'>News</Link>
                  </li>
                </ul>
              </div>
              <div class='footer-col'>
                <h4>follow us</h4>
                <div class='social-links'>
                  <Link
                    to='https://www.facebook.com/meena.tamang.520'
                    target='_blank'
                  >
                    <i className='bi bi-facebook'></i>
                  </Link>
                  <Link to='https://twitter.com/home' target='_blank'>
                    <i className='bi bi-twitter-x'></i>
                  </Link>
                  <Link to='#'>
                    <i className='bi bi-instagram'></i>
                  </Link>
                  <Link
                    to='https://www.linkedin.com/in/meena-tamang-70aa37184'
                    target='_blank'
                  >
                    <i className='bi bi-linkedin' color='red'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
