import React from "react";

export const Card = ({ cardInfo }) => {
  const { id, title, image, href } = cardInfo;
  return (
    <>
      <li key={id}>
        <a href={href}>
          <img src={image}/>
          <span>{title}</span>
        </a>
      </li>
    </>
  );
};
