import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../Components/utils/Global.context";

const Favs = () => {

  const [info, setInfo] = useState([])
  const { Theme } = useGlobalContext()

  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem('favs')))
  }, [info])

  const handleClearFavs = (e) => {
    localStorage.clear()
  }

  return (
    <div className="home" style={{ background: Theme.bgHome, color: Theme.color }}>
      <h1>Dentists Favs</h1>
      <button className="button_fav" onClick={handleClearFavs}>Clear Favs</button>
      <div className="card-grid">
        {info?.map(info => <Card key={info.id} name={info.name} username={info.username} id={info.id} />)}
      </div>
    </div>
  );
};

export default Favs;
