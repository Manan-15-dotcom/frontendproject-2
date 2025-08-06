import React, { Component } from 'react';
import './css/Apple.css';

export default class Apple extends Component {
  menuClick() {
    const navlist = document.getElementById("navlist");
    navlist.classList.toggle("active");
  }

  constructor() {
    super();
    this.state = { index: 0, slideCount: 3 };
    this.autoSlide = this.autoSlide.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }

  autoSlide() {
    let nextIndex = (this.state.index + 1) % this.state.slideCount;
    this.setState({ index: nextIndex });
    document.getElementById("slideRef").style.transform = `translateX(-${nextIndex * 100}%)`;
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <nav className="navbar">
            <div className="nav-left">
              <span className="brand">Campus<span className="bold">Connect</span></span>
            </div>

            <ul className="nav-center" id="navlist">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>

            <div className="nav-right">
              <input type="text" placeholder="Search..." className="search-bar" />
              <button className="btn login">Log in</button>
              <button className="btn signup">Sign up</button>
            </div>

            <div className="menu" onClick={() => this.menuClick()}>&#9776;</div>
          </nav>
        </header>

        {/* <main className="main-content">
          <section className="slider-section">
            <div id="slideRef" className="slider-track">
              <div className="slide">Slide 1</div>
              <div className="slide">Slide 2</div>
              <div className="slide">Slide 3</div>
            </div>
          </section>
        </main> */}

        <footer className="footer">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">Campus<span className="bold">Connect</span></div>
              <ul>
                <li>Questions</li>
                <li>Help</li>
                <li>Chat</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>PRODUCTS</h4>
              <ul>
                <li>Teams</li>
                <li>Advertising</li>
                <li>Talent</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>COMPANY</h4>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Legal</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>CAMPUS NETWORK</h4>
              <ul>
                <li>Technology</li>
                <li>Science</li>
                <li>Culture</li>
                <li>Business</li>
                <li>Data</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="social-links">
              <a href="#">Blog</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
            <p>
              Site design / logo © 2025 CampusConnect Inc; content licensed under <a href="#">CC BY-SA</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
