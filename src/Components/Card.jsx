import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./utils/Global.context";


const Card = ({ name, username, id }) => {

  const { favs, setfavs } = useGlobalContext()

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])

  const addFav = () => {
    let exist = false
    let faveados = favs
    faveados.forEach(fav => {
      if (fav.id === id) {
        exist = true
      }
    })
    if (exist === false) {
      faveados.push({
        "name": name,
        "username": username,
        "id": id
      })
      localStorage.setItem("favs", JSON.stringify(faveados))
      alert("Odontologo agregado")
    }
    setfavs(faveados)
  }

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="doctor-img" />
      <h2><Link to={`dentist/${id}`}>{name}</Link></h2>
      <h3>{username}</h3>
      <button data-testId="favBoton" onClick={() => addFav()} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
