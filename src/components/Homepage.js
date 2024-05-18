import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const goToInstaller = () => {
    navigate('/installer-homepage');
  };

  return (
    <div className='homepage-container'>
      <div className="banner">
        <header className="header">
          <h1>Download Feedback Form Software</h1>
          <p>To provide feedback, please install our software by selecting your operating system below:</p>
        </header>
      </div>
      <div className="homepage">
        <div className="button-container">
            <button className="download-button" onClick={goToInstaller}>
                🖥️ Download for Windows <span className='download-size'>50 MB</span>
            </button>
            <button className="download-button" onClick={goToInstaller}>
                🍏 Download for MacOS <span className='download-size'>48 MB</span>
            </button>
            <button className="download-button" onClick={goToInstaller}>
                🐧 Download for Linux <span className='download-size'>45 MB</span>
            </button>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 HackMelbourne. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;