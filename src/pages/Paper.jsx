import { FiHome } from 'react-icons/fi';
import './All.css'; // import the CSS file
import EventPage from './EventPage'; // Import the new reusable component



function Paper() {
    return (

        <EventPage
            title="Paper Presentation"
            description="Welcome to the Paper Presentation event! Showcase your research and ideas. Make sure to bring your slides and be ready to present."
            // Assuming the image for Paper Presentation is ppt-banner.png
            bannerImage="./ppt-banner.png" 
            regLink="https://docs.google.com/forms/d/e/1FAIpQLSe3dYz8QYXs0CNHJcmpB9bI5s-8PQH8slVBh1MslawrH6tWKw/viewform?usp=dialog"
        />
    );
  }
  
  export default Paper;
  