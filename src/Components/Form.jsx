import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./utils/Global.context";


const Form = () => {

    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        let nameTest = /^.{5,}$/.test(user.nombre)
        let emailTest = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(user.email)
        let form = document.querySelector('form')
        let mensajes = document.querySelectorAll('p')
        mensajes.forEach(e => {
            e.remove()
        })
        if (nameTest === false || emailTest === false) {
            let error = document.createElement('p')
            error.innerHTML = "Por favor verifique su información."
            form.after(error)
        } else {
            let msg = document.createElement('p')
            msg.innerHTML = `Muchas gracias!! ${user.nombre}, te contactaremos vía mail.`
            form.after(msg)
        }
    }

    

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input data-testId="name" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" onChange={handleChange} />
                <input data-testId="email" type="email" name="email" id="email" placeholder="Ingrese su email" onChange={handleChange} />
                <input data-testId="click" type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Form;