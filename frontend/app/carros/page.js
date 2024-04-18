'use client'
import { useState } from "react"
import BemVindo from "../components/bemvindo"

export default function Carros() {

    let carros = ['Gol', 'Palio', 'Uno', 'Celta', 'Corsa']
    let [toggle, setToggle] = useState(true)

    function toggleLista() {
        setToggle(!toggle)
    }

    return (
        <div>
            <BemVindo></BemVindo>
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