import {render, screen, fireEvent} from '@testing-library/jest-dom'
import Home from '../Routes/Home'
import React from 'react'
import App from '../App'
import Form from '../Components/Form'


describe("Testing Home" , () => {
    test("Test Odontologo Name", () => {
        render(<Home/>)
        const odontologo = screen.getByText("Ervin Howell")
        expect(odontologo).toBeInTheDocument()
    })
    test("Testing Fav Button" , () => {
        render(<Home/>)
        const boton = screen.getByTestId("favBoton")
        expect(boton) = toBeInTheDocument
    })
})

test("Test Name" , () => {
    render(<Form/>)
    const inputName = screen.getByTestId("name")
    expect(inputName).toBeInTheDocument
    fireEvent.change(inputName, {target: {value: 'tomas'}})
    expect(inputName.value).toBe('tomas')
})

test("Test Email" , () => {
    render(<Form/>)
    const inputName = screen.getByTestId("email")
    expect(inputName).toBeInTheDocument
    fireEvent.change(inputName, {target: {value: 'tomas@gmail.com'}})
    expect(inputName.value).toBe('tomas@gmail.com')
})


test("Testing Form" , () => {
    render(<Form/>)
    const inputName = screen.getByTestId("name")
    const inputEmail = screen.getByTestId("email")
    const buttonSubmit = screen.getByTestId("click")

    const succes = screen.getByText("Muchas gracias!! Tomas, te contactaremos vía mail.")

    fireEvent.change(inputName, {target: {value: 'tomas'}})
    fireEvent.change(inputEmail, {target: {value: 'tomas@gmail.com'}})
    fireEvent.click(buttonSubmit)

    expect(succes).toBeInTheDocument()
})