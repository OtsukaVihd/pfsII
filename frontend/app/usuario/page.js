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
            setListaUsuarios(r);
        })
    }

    return(
        <div>
            <h1>Usuários cadastrados</h1>
            <div>
                <a href="/usuario/cadastro" style={{marginBottom: "15px"}} className="btn btn-primary">Cadastrar usuario</a>
            </div>
            <div>
                <MontaTabela lista={listaUsuarios}  cabecalhos={["Código", "Nome", "Email", "Senha", "Nome do perfil|perfilNome"]}/>
            </div>
        </div>
    )
}