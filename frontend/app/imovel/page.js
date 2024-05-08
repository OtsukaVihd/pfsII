'use client'

import { useEffect, useState } from "react"
import MontaTabela from "../components/montaTabela"


export default function Imovel() {
    let [listaImoveis, setListaImoveis] = useState([])
    useEffect((e) => {
        carregarImoveis()
    }, [])

    function carregarImoveis() {
        fetch('http://localhost:5000/imovel', { credentials: 'include' })
            .then(r => {
                return r.json()
            })
            .then(r => {
                setListaImoveis(r)
            })
    }


    return (
        <div>
            <h1>Imóveis cadastrados</h1>
            <button className="btn btn-primary" style={{ marginBottom: "10px" }}>Cadastrar imóvel</button>
            <div>
                <MontaTabela lista={listaImoveis} />
            </div>
        </div>

    )
}