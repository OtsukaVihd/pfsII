'use client'
import { useState } from "react"

export default function Carros() {

    let carros = ['Gol', 'Palio', 'Uno', 'Celta', 'Corsa']
    let [toggle, setToggle] = useState(true)

    function toggleLista() {
        setToggle(!toggle)
    }

    return (
        <div>
            <h1>Primeiro componente</h1>
            <button onClick={toggleLista} className="" id="toggle">Toggle list</button>
            {
                toggle ?
                    <ul>
                        {
                            carros.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })
                        }
                    </ul>
                    :
                    ""
            }

        </div>
    )
}