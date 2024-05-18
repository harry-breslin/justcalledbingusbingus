import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFileDownload } from 'react-icons/md';
import { FaWindows } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';
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
                <span>
                    <span className="os-icon"><FaWindows /></span> Download for Windows <span className='download-size'>(50 MB)</span>
                </span> <MdFileDownload />
            </button>
            <button className="download-button" onClick={goToInstaller}>
                <span>
                    <span className="os-icon"><FaApple /></span> Download for MacOS <span className='download-size'>(48 MB)</span>
                </span> <MdFileDownload />
            </button>
            <button className="download-button" onClick={goToInstaller}>
                <span>
                    <span className="os-icon"><FaLinux /></span> Download for Linux <span className='download-size'>(45 MB)</span>
                </span> <MdFileDownload />
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