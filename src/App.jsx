import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleBotLink = () => {
    window.location.href = "https://github.com/apps/git-patrol"; 
  };

  return (
    <div className={`landing-page ${darkMode ? 'dark' : ''}`}>
      <nav className="navbar">
        <h2 className="brand">Git Patrol Bot</h2>
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <header className="header">
        <h1>Empowering Positive Communication</h1>
        <p>Automate sentiment analysis and promote respectful interactions in your GitHub repositories.</p>
        <button onClick={handleBotLink} className="bot-button">Try the Bot</button>
      </header>
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Automated sentiment analysis for issues and comments.</li>
          <li>Constructive responses to negative sentiments.</li>
          <li>Seamless integration with GitHub repositories.</li>
          <li>Customizable negative words list and responses.</li>
        </ul>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>At Git Patrol Bot, we are committed to fostering a constructive and respectful environment within the GitHub community. Our bot is designed to help moderate conversations and ensure feedback is delivered positively.</p>
      </section>
      <footer className="footer">
        <p>© 2024 Git Patrol Bot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
