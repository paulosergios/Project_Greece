import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Carousel.css'

import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
  return (
    <Carousel className='carousel_height'>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/Grecia_1.jpg"
          alt="Primeira imagem"
        />
        <Carousel.Caption>
          <h3>The Stunning Greek Sea</h3>
          <p>Dive into the turquoise and crystal clear waters of the Greek sea, while enjoying a spectacular panoramic view that combines the blue of the sea and sky, creating a magical and unforgettable atmosphere.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/Grecia_2.jpg"
          alt="Segunda imagem"
        />
        <Carousel.Caption>
          <h3>The Magic of Ancient Streets in Greece</h3>
          <p>Explore the ancient streets of Greece and discover the beauty of their architectural details and the history that each corner holds. Feel the magic and the unique atmosphere that surrounds these charming streets.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/Grecia_3.jpg"
          alt="Terceira imagem"
        />
        <Carousel.Caption>
          <h3>Greece in its Photographic Splendor</h3>
          <p>Greece is a country of unparalleled beauty, filled with incredible locations to photograph. This photo is an example of the exuberance of this country, capturing a unique and memorable scene.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/Grecia_4.jpg"
          alt="Quarta imagem"
        />
        <Carousel.Caption>
          <h3>Discover Greek Culture</h3>
          <p> Greece is a country that captivates visitors from all over the world with its fascinating historic sites, stunning beaches, and picturesque villages. By exploring Greece, you can immerse yourself in ancient history, explore natural wonders, and experience delicious local cuisine.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselComponent;
