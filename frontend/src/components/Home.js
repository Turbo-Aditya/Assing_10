import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/company'); 
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to Job Portal Application</h1>
                <p>Your gateway to endless career opportunities.</p>
                <button onClick={handleGetStarted} className="cta-button">Get Started</button>
            </div>

            {/* About Section */}
            <div className="about">
                <h2>Why Choose Us?</h2>
                <p>
                    Whether you're looking for your first job or the next step in your career, 
                    we make it simple and seamless to find opportunities tailored to your skills 
                    and interests.
                </p>
            </div>

            {/* Features Section */}
            <div className="features">
                <h2>Features</h2>
                <div className="feature-cards">
                    <div className="card">
                        <h3>Find Your Dream Job</h3>
                        <p>
                            Explore thousands of job listings from top companies across various 
                            industries.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Easy Application Process</h3>
                        <p>
                            Submit your applications with just a few clicks and track your progress.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Expert Career Advice</h3>
                        <p>
                            Get tips and resources to help you land your dream job and excel in your career.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Job Portal Application. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
