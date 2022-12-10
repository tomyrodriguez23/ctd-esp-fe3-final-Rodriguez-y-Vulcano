import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../Components/utils/Global.context'

const Detail = () => {

  const [odontologo, setOdontologo] = useState({})

  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
      .then(res => setOdontologo(res.data))
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{odontologo.name}</td>
          <td>{odontologo.email}</td>
          <td>{odontologo.phone}</td>
          <td>{odontologo.website}</td>
        </tr>
      </table>
    </>
  )
}

export default Detail