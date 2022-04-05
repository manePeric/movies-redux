import React from "react";

function SingleMovie({
    id,
    title,
    director,
    imageUrl,
    duration,
    releaseDate,
    genre,
}) {
  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: 10,
        padding: 5,
        width: 200,
        marginLeft: 5,
      }}
    >
      <span>Title: {title}</span>
      <span>Director: {director}</span>
      <span>Image: {imageUrl}</span>
      <span>Duration: {duration}</span>
      <span>Release Date: {releaseDate}</span>
      <span>Genre: {genre}</span>
    </div>
  );
}

export default SingleMovie;