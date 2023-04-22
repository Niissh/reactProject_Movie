import React from 'react';

const Rating = (props) => {
  const rating = props.rating;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const className = i <= rating ? "star-filled" : "star-empty";
    stars.push(<span key={i} className={className} />);
}

  return (
    <>
     <div className="stars">{stars}</div>;
    </>
  )
  }
export default Rating