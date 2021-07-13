import React from "react";

export const Card = ({ cardInfo }) => {
  const { id, title, image, href } = cardInfo;
  return (
    <>
      <li key={id}>
        <a href={href || `#`}>
          <img src={image || `http://placehold.it/300x300`} />
          <span>{title}</span>
        </a>
      </li>
    </>
  );
};
