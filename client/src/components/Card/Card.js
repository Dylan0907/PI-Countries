import React from "react";
import { Link } from 'react-router-dom';

export default function Card({ name, image, continent, id}) {
  return (
    <div>
      <Link to={"/detail/" + id}>
      <h3>{name}</h3>
      </Link>
      <h5>{continent}</h5>
      <img src={image} alt="img not found" width="150px" height="100px" />
    </div>
  );
}
