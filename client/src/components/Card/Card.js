import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css"

export default function Card({ name, image, continent, id}) {
  return (
    <div className="container-card">
      <Link to={"/detail/" + id}>
      <h3 className="card-title">{name}</h3>
      </Link>
      <h5 className="card-continent">{continent}</h5>
      <img src={image} alt="img not found" className= "card-img" width="150px" height="100px" />
    </div>
  );
}
