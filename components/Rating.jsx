import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  }

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <span key={ratingValue} onClick={() => handleRating(ratingValue)}>
            {ratingValue <= rating ? <i className="fa fa-star"></i> : <i className="fa fa-star-o"></i>}
          </span>
        );
      })}
    </div>
  );
}

export default Rating;