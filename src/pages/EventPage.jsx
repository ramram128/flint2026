import React from 'react';
// import './All.css'; // Import the CSS file
import { FiHome } from 'react-icons/fi';

// The component accepts props for all dynamic content
function EventPage({ title, description, bannerImage ,regLink,slogan="esoteric colloquium"}) {
    return (
        <>
            {/* === NAVBAR === */}
            <nav className="navbar">
                <div className="nav-left">
                    <button className="home-btn" onClick={() => (window.location.href = "/")}>
                        <FiHome></FiHome>
                    </button>
                </div>
                <div className="nav-center">
                    <div className="topic-container">
                        <h2 className="topic">FLINT2026</h2>
                        <span className="slogan">{slogan}</span>

                    </div>
                </div>
            </nav>

            <div className="container">
                {/* Conditional Rendering:
                Only render the hero-banner div if bannerImage prop is provided.
                */}
                {bannerImage && (
                    <div className="hero-banner">
                        {/* Use the bannerImage prop */}
                        <img src={bannerImage} alt={`${title} Banner`} />
                    </div>
                )}
                
                <div className="hero">
                    {/* Use the title prop for the main heading */}
                    <h1>{title}</h1> 
                    {/* Use the description prop */}
                    <p>{description}</p>
                </div>
                <div className="button-group">
                    {/* CRITICAL CHANGE: Use an <a> tag and wrap the button text in the spans
                        Note: The onClick now handles the window.open logic.
                    */}
                    <a 
                        className="button"
                        href="#" // Use href="#" or the actual link if you prefer a standard a tag click
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default link behavior if using href="#"
                            window.open(regLink, "_blank");
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Register Now
                    </a>
                </div>
            </div>
        </>
    );
}

export default EventPage;