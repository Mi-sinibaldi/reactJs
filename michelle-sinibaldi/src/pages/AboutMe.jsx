import React, { Component } from 'react';
import { Footer, Nav, PersonalInfo } from '../components/index';

class AboutMe extends Component {
  render() {
    return (
      <div className="pricipal-div">
        <section className="pricipal-section">
          <Nav />
          <PersonalInfo />
        </section>
        <Footer />
      </div>
    );
  }
}

export default AboutMe;