import React, { Component } from 'react';
import './css/Tanu.css';

export default class Tanu extends Component {
  render() {
    return (
      <>
        <header className='tanuHeader'>
          <div className='logo'>
            My Project Logo
          </div>
        </header>

        <section>
          <div className='card'>
            <img className="carImage" src="./assets/images/audi.png" alt="BMW" />
            <label>BMW</label>
          </div>
          <div className='card'>
            <img className="carImage" src="./assets/images/audi2.png" alt="Audi" />
            <label>Audi</label>
          </div>
          <div className='card'>
            <img className="carImage" src="https://www.google.com/aclk?sa=l&ai=DChsSEwj-p-K9y_aOAxVYWQ8CHYXVB-MYACICCAEQCRoCdGI&co=1&ase=2&gclid=CjwKCAjw-svEBhB6EiwAEzSdrhnw3cqfbvmKo3cvI9EfeLGpRQa6JtjNV9jVIWJvbGOmI2GeAjrciRoCze8QAvD_BwE&category=acrcp_v1_48&sig=AOD64_2W5uW9nomIxUCbiOXjKNtFcPa7Jg&ctype=5&q=&nis=4&ved=2ahUKEwiZtdy9y_aOAxW4r1YBHScqGHQQ9aACKAB6BAgFEDk&adurl=" alt="BMW" />
            <label>BMW</label>
          </div>
        </section>

        <footer>
          Copyright © 2025. All rights reserved.
        </footer>
      </>
    );
  }
}
