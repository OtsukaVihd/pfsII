'use client'
import { useEffect } from "react"


export default  function Usuario(){
    useEffect((e) => {
        carregarUsuarios()
    }, [])

    function carregarUsuarios(){
        fetch('http://localhost:5000/usuarios', {credentials: 'include'})
        .then(r=> {
            return r.json()
        })
        .then(r=> {
            console.log(r)
        })
    }

    return(
        <div>
            <h1>Usuário</h1>
            <div>
                <button className="btn btn-primary">Cadastrar usuario</button>
            </div>
        </div>
    )
}