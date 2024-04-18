'use client'

import { useRef, useState } from "react"
import MontaTabela from "./montaTabela";

export default function Formulario() {

    let [listaDados, setListaDados] = useState([]);
    let nome = useRef("");
    let email = useRef("");
    let dia = useRef(0);

    function cadastrar() {
        setListaDados([...listaDados, {
            nome: nome.current.value,
            email: email.current.value,
            dia: dia.current.value
        }])

        nome.current.value = "";
        email.current.value = "";
        dia.current.value = "";
    }

    return (
        <div>
            <div>
                <h1>Formulário</h1>
                <div>
                    <label>Nome: </label>
                    <input ref={nome} type="text"></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input ref={email} type="email"></input>
                </div>
                <div>
                    <label>Dia do aniversário: </label>
                    <input ref={dia} type="number"></input>
                </div>
                <br></br>
                <button onClick={cadastrar}>Cadastrar</button>
            </div>
            <br></br>

            <MontaTabela lista={listaDados}></MontaTabela>
        </div>
    )
}
