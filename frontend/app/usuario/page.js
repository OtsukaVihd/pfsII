'use client'
import { useEffect, useState } from "react"
import MontaTabela from "../components/montaTabela"


export default  function Usuario(){
    let [listaUsuarios, setListaUsuarios] = useState([])
    useEffect((e) => {
        carregarUsuarios()
    }, [])

    function carregarUsuarios(){
        fetch('http://localhost:5000/usuarios', {credentials: 'include'})
        .then(r=> {
            return r.json()
        })
        .then(r=> {
            setListaUsuarios(r)
        })
    }

    return(
        <div>
            <h1>Usuário</h1>
            <div>
                <button className="btn btn-primary">Cadastrar usuario</button>
            </div>
            <div>
                <MontaTabela lista={listaUsuarios}  cabecalhos={["Código", "Nome", "Email", "Senha", "Perfil"]}/>
            </div>
        </div>
    )
}