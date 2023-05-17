import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <img src="./image/about_image.jpg" alt="greek_str" />
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
                Welcome to our travel agency dedicated to exploring the captivating beauty of Greece. We are passionate about creating unforgettable experiences and providing authentic adventures for all travel enthusiasts.
                At our agency, we believe that Greece is a unique and magical destination, filled with history, culture, and breathtaking landscapes. We combine our specialized knowledge and love for Greece to offer personalized itineraries, taking you to explore the hidden gems of this extraordinary country.
                Our trips are carefully designed to provide a complete immersion into Greece's rich heritage. From majestic ancient ruins to picturesque islands with crystal-clear waters, every detail is selected to create memorable and enriching moments.
                Our team of experienced and passionate local guides is ready to share their wealth of knowledge about Greek history, mythology, and traditions. They will guide you through the most iconic sites as well as off-the-beaten-path treasures, allowing you to discover the authentic essence of Greece.
                Whether you want to explore Athens and its majestic Acropolis, dive into the vibrant culture of Mykonos and Santorini, or venture into the fascinating landscapes of Crete and Rhodes, we are here to make your dreams of traveling to Greece a reality.
                Join us and embark on a unique and inspiring journey through the land of gods, where the past and present blend into an enriching experience. We look forward to welcoming you to one of the most stunning and charming regions in the world: Greece!
            </p>
            <h3 className="about-subtitle">Our Mission</h3>
            <p className="about-mission">
                At our travel agency, our mission is to provide exceptional and unforgettable experiences for travelers who wish to explore the marvelous Greece. We believe in the transformative power of travel and the positive impact it has on people's lives. Our commitment is to create customized itineraries that cater to the individual interests of our clients, allowing them to make the most of their experience in Greece. Additionally, we are dedicated to delivering exceptional service and being present at every step of our clients' journey, from planning to returning home. Our mission is to be a trusted and inspiring partner, sharing the passion for Greece and creating lasting memories on every trip. Join us on an extraordinary journey through Greece and discover everything this fascinating country has to offer.
            </p>
            <h3 className="about-subtitle">Contact Us</h3>
            <p className="about-contact">Email: contact@example.com</p>
        </div>
    );
}

export default About;
