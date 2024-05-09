'use client'
import { useEffect, useState } from "react"

export default function CadastroUsuario(){

    let [listaPerfis, setListaPerfis] = useState([])

    function carregarPerfis(){
        fetch("http://localhost:5000/perfil/", {
            credentials: 'include'
        })
        .then(r=> {
            return r.json();
        })
        .then(r=> {
            setListaPerfis(r)
        })
    }

    useEffect(() => {
        carregarPerfis();
    }, [])

    return(
        <div>
            <h1>
                Cadastro de usuários
            </h1>

            <div>
                <div className="form-group">
                    <label>Nome: </label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input type="password" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Perfil:</label>
                    <select className="form-control">
                        <option> -- Selecione -- </option>
                        {
                            listaPerfis.map((value, index) =>{
                                return <option value={value.perfilId}>{value.perfilNome}</option>
                        })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label> 
                        <input type="checkbox"></input> Ativo</label>
                </div>

                <div>
                    <button className="btn btn-primary mr-2">Cadastrar</button>
                    <a href="/usuario" className="btn btn-outline-primary">Voltar</a>
                </div>
            </div>
        </div>
    )
}