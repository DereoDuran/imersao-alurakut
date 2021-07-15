import React from "react";

export const Card = ({ cardInfo }) => {
  const { id, title, imageUrl, href } = cardInfo;
  return (
    <>
      <li key={id}>
        <a href={href}>
          <img src={imageUrl}/>
          <span>{title}</span>
        </a>
      </li>
    </>
  );
};
