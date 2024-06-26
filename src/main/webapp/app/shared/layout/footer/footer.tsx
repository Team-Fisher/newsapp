import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const App: React.FC = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        <div className="row">
          <div className="col-md-12">
            <div className="ml-4">
              <p className="link-text">
                {/* Links to navbar items */}
                <Link to="/" className="link-text">
                  Top Stories
                </Link>
                <span className="footer-space"></span>
                <span className="footer-space"></span>
                <Link to="/World" className="link-text">
                  World
                </Link>
                <span className="footer-space"></span>
                <span className="footer-space"></span>
                <Link to="/National" className="link-text">
                  National
                </Link>
                <span className="footer-space"></span>
                <span className="footer-space"></span>
                <Link to="/Technology" className="link-text">
                  Technology
                </Link>
                <span className="footer-space"></span>
                <span className="footer-space"></span>
                <Link to="/Science" className="link-text">
                  Science
                </Link>
                <span className="footer-space"></span>
                <span className="footer-space"></span>
                <Link to="/Science" className="link-text">
                  Culture
                </Link>
                <span className="footer-space"></span>
                <span className="footer-space"></span>
                <Link to="/Science" className="link-text">
                  Politics
                </Link>
                <span className="footer-space"></span>
                <Link to="/Podcast" className="link-text">
                  Podcast
                </Link>

                {/* Add more links for other navbar items */}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="ml-4">
              <span className="footer-space"></span>
              <Link to="/Aboutus" className="link-text">
                {' '}
                {/* Add Link to About Us page */}
                About Us
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ml-4">
              <h3>Contact Us</h3>
              <p>
                Email: <a href="mailto:OStreetMedia@gmail.com">OStreetMedia@gmail .com</a>
              </p>
              {/* <p>Email: example@example.com</p> */}
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="ml-4">
              <p>
                © 2024 Copyright
                <span className="footer-space"></span>
                Privacy policy
                <span className="footer-space"></span>
                Terms of Service
                <span className="footer-space"></span>
                Help
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
