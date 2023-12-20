// src/components/Card.js
import React, { useState } from 'react';
import './Card.css'; // './Card.css' is the path

function Card({ id, vimageUrl, vimageUrl2, price, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    const priceText = price ? `, price: ${price}` : '';
    const descriptionText = description ? `, description: ${description}` : '';
    const imageUrlText = vimageUrl ? `, vimageUrl: ${vimageUrl}` : '';
    const imageUrl2Text = vimageUrl2 ? `, vimageUrl2: ${vimageUrl2}` : '';

    const message = `Clicked id: ${id}${priceText}${descriptionText}${imageUrlText}${imageUrl2Text}`;

    console.log(message);
    alert(message);
    // Add your logic for what happens when a card is clicked
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? vimageUrl2 : vimageUrl} alt={`Card ${id}`} />
      <div className="card-info"> {/* Add this line to include the card-info class */}
        {price && <div className="price">Price: <span className="bold">{price}</span></div>}
        {description && <div className="description">{description}</div>}
      </div>
      {isHovered && <div className="overlay">Click me!</div>}
    </div>
  );
}

export default Card;
