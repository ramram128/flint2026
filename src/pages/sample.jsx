import React from 'react';
import EventPage from './EventPage'; // Import the new reusable component

function sample() {
    return (
        <EventPage
            title="Paper Presentation"
            description="Welcome to the Paper Presentation event! Showcase your research and ideas. Make sure to bring your slides and be ready to present."
            // Assuming the image for Paper Presentation is ppt-banner.png
            bannerImage="./ppt-banner.png" 
            regLink="https://docs.google.com/forms/d/e/1FAIpQLScPBpIVfsWf_Y-dXABl8JbSnHn_brOKKdvVhNlBZxOHo3m4bA/viewform"
        />
    );
}

export default sample;