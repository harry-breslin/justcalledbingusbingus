import React from 'react';
import './InstallerHomepage.css';

function InstallerHomepage() {
    return (
        <div className="container">
          <header className="header">
            <h1>Welcome to the Installation Wizard</h1>
          </header>
          <main className="main-content">
            <div className="step-indicator">
              <div className="step active">1. Welcome</div>
              <div className="step">2. License Agreement</div>
              <div className="step">3. Installation</div>
              <div className="step">4. Completion</div>
            </div>
            <div className="content">
              <h2>Step 1: Welcome</h2>
              <p>Thank you for choosing our software. Click "Next" to continue with the installation process.</p>
            </div>
          </main>
          <footer className="footer">
            <button className="button">Back</button>
            <button className="button primary">Next</button>
          </footer>
        </div>
      );
}

export default InstallerHomepage;