import './All.css'; // import the CSS file
import EventPage from './EventPage'; // Import the new reusable component



function Workshop() {
    return (

        <EventPage
            title="Workshop"
            description="Join our hands-on workshop and learn something new and exciting! Limited seats available, so register early."
            // Assuming the image for Paper Presentation is ppt-banner.png
            bannerImage="./sympo-banner1.png" 
            regLink="https://docs.google.com/forms/d/e/1FAIpQLScqlLxMTYYP0Ag-HUopAsgHqeJ8-jmIzvV_bn_Tfw_mvx9UiA/viewform?usp=dialog"
        />
    );
  }
  
  export default Workshop;
  