import React from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { useGlobalContext } from '../Components/utils/Global.context'


const Home = () => {

  const url = "https://jsonplaceholder.typicode.com/users"
  const [info, setInfo] = useState([])
  const { Theme } = useGlobalContext()

  useEffect(() => {
    axios(url)
      .then(res => setInfo(res.data))
  }, [])

  return (
    <div className="home" style={{ background: Theme.bgHome, color: Theme.color }} >
      <h1>Home</h1>
      <div className='card-grid'>
        {info.map(info => <Card key={info.id} name={info.name} username={info.username} id={info.id} />)}
      </div>
    </div>
  )
}

export default Home