import React from 'react'
import Form from '../Components/Form'
import { useGlobalContext } from '../Components/utils/Global.context'

const Contact = () => {

  const { Theme } = useGlobalContext()

  return (
    <div className="home" style={{ background: Theme.bgHome, color: Theme.color }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact