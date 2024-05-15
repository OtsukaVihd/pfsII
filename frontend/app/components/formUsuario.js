'use client'
import { useEffect, useRef, useState } from "react"

export default function FormUsuario(){
    function carregarPerfis() {
        fetch("http://localhost:5000/perfil/", {
            credentials: 'include'
        })
            .then(r => {

                return r.json();
            })
            .then(r => {
                setListaPerfis(r)
            })
    }

    useEffect(() => {
        carregarPerfis();
    }, [])


    let [listaPerfis, setListaPerfis] = useState([])

    let nome = useRef("");
    let email = useRef("");
    let senha = useRef("");
    let perfil = useRef(0);

    function gravarUsuario() {
        let ok = false

        if (nome.current.value != "" && email.current.value != "" && senha.current.value != "" && perfil.current.value > 0) {
            let usuario = {
                usuNome: nome.current.value,
                usuEmail: email.current.value,
                usuSenha: senha.current.value,
                perfil: {
                    perfilId: perfil.current.value
                }
            }
            fetch("http://localhost:5000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(usuario)
            }).
                then(r => {
                    ok = r.status == 201;
                    return r.json()
                }).
                then(r => {
                    if (ok) {
                        alert(r.msg)
                        nome.current.value = "";
                        email.current.value = "";
                        senha.current.value = "";
                        perfil.current.value = 0;
                    }
                    else {
                        alert(r.msg)
                    }
                })
        }
        else {
            alert("Preecha os campos corretamente!")
        }
    }

    return(

        <div>
        <div className="form-group">
            <label>Nome: </label>
            <input ref={nome} type="text" className="form-control"></input>
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input ref={email} type="email" className="form-control"></input>
        </div>
        <div className="form-group">
            <label>Senha:</label>
            <input ref={senha} type="password" className="form-control"></input>
        </div>
        <div className="form-group">
            <label>Perfil:</label>
            <select ref={perfil} className="form-control">
                <option> -- Selecione -- </option>
                {
                    listaPerfis.map((value, index) => {
                        return <option value={value.perfilId}>{value.perfilNome}</option>
                    })
                }
            </select>
        </div>

        <div>
            <button onClick={gravarUsuario} className="btn btn-primary mr-2">Cadastrar</button>
            <a href="/usuario" className="btn btn-outline-primary">Voltar</a>
        </div>
    </div>
    )
}