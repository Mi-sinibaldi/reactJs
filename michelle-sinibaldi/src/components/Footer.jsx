import React, { Component } from 'react';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div id="contacts">
            <a href="https://github.com/Mi-sinibaldi" target='_blank' rel="noreferrer">
              <img src={github} alt='github' className='svg-contacts'/>
            </a>
            <a href="https://www.linkedin.com/in/mi-sinibaldi/" target='_blank' rel="noreferrer">
              <img src={linkedin} alt='linkedin' className='svg-contacts'/>
            </a>
          </div>
          <p id="michelle-copyright">Michelle Sinibaldi 2023</p>
        </footer>
      </>
    );
  }
}

export default Footer;