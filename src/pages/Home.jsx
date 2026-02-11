import { Link } from "react-router-dom";
import './All.css'; // import the CSS file
import sympoImg from "/flow-chart5.png";
import { FiHome } from "react-icons/fi";
import { Analytics } from '@vercel/analytics/react';


function Home() {
  const slogan ="esoteric colloquium";
  const collegeBannerImg = "./collage-banner.png"; // Logo image URL

  return (
<>
    
    <nav className="navbar">
        <div className="nav-left">
            <button className="home-btn" onClick={() => (window.location.href = "/")}>
            <FiHome /> 
            </button>
        </div>
        <div className="nav-center">
          <div className="topic-container" >
              <h2 className="topic">FLINT2026</h2>
              <span className="slogan">{slogan}</span>
            </div>
        </div>
    </nav>

    <div className="home-container">
      <div className="college-name-banner" >
                <h1>Mahendra College of Engineering, SALEM</h1>
          </div>
      <div className="home-hero">
      <div className="home-image">
          <img src={sympoImg} alt="Sympo Banner" />
        </div>
        <div className="home-button-group">
          <Link className="home-nav-button" to="/workshop">Workshop</Link>
          <Link className="home-nav-button" to="/paper">Paper Presentation</Link>
          <Link className="home-nav-button" to="/project">Project Expo</Link>
          <Link className="home-nav-button" to="/ideathon">Ideathon</Link>
        </div>
      </div>
     
    <Analytics /><footer>  <section id="contact">
  <h2>Contact Us</h2>

  <div class="contact-row">
    <div class="contact-item">
      <strong>Sureshkumar D</strong> :
      <a href="tel:9047333741">9047333741</a>
    </div>

    <div class="contact-item">
      <strong>Gangraj R</strong> :
      <a href="tel:8667747352">8667747352</a>
    </div>
  </div>

  <h3>Our Location</h3>
  <p>
    📍 <a href="https://maps.app.goo.gl/ZLpWE9vKxavZm9R48" target="_blank">
      View on Google Maps
    </a>
  </p>
</section>

</footer>
    
    </div>
    </>
  );
}

export default Home;
