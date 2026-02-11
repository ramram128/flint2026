import { FiHome } from 'react-icons/fi';
import './All.css'; // import the CSS file
import EventPage from './EventPage'; // Import the new reusable component


function Ideathon() {
    return (

        <EventPage
            title="Ideathon"
            description="Welcome to the Ideathon event! Showcase your research and ideas. Make sure to bring your slides and be ready to present."
            // Assuming the image for Paper Presentation is ppt-banner.png
            bannerImage="./ideathon-banner.png" 
            regLink="https://docs.google.com/forms/d/e/1FAIpQLSeix0juOa1WiDm2Wer-yGygM05YyQH2Ur11UT5Ukq7GzUJD7A/viewform?usp=dialog"
        />
    );
  }
  
  export default Ideathon;
  