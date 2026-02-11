import { FiHome } from 'react-icons/fi';
import './All.css'; // import the CSS file
import EventPage from './EventPage'; // Import the new reusable component



function Project() {
    return (
        <>
        <EventPage
            title="Project Expo"
            description="Display your project to the symposium audience. Bring your prototype or demo ready for exhibition."
            // Assuming the image for Paper Presentation is ppt-banner.png
            bannerImage="./project-banner.png" 
            regLink="https://docs.google.com/forms/d/e/1FAIpQLSex6CJZy6eIwvnmIWEDuge4p07Ab4VaGk1-tsLrYklUwjZRTw/viewform?usp=dialog"
        />
        
        </>
    );
  }
  
  export default Project;
  