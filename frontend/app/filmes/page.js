'use client'
import { useRef, useState } from "react";

export default function Filmes(){

    let apiKey = "1f46cdad";
    let [listaFilmes, setListaFilmes] = useState([]);
    let nomeFilme = useRef("");

    function pesquisar(){
        let termoBusca = nomeFilme.current.value;
        if(termoBusca != ""){
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${termoBusca}`)
            .then(r=>{
                return r.json();
            })
            .then(r=> {
                console.log(r);
                if(r.Response == "False"){
                    alert(r.Error)
                }
                else{
                    //gatilho para exibir a lista
                    setListaFilmes(r.Search);
                }
            })
        }
        else{
            alert("Preencha o nome do filme!")
        }
    }

    return (
        <div>
            <h1>Consulta de filmes</h1>
            
            <div className="form-group">
                    <label>Nome do filme:</label>
                    <input ref={nomeFilme} className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={pesquisar}>
                        <i className="fas fa-search"></i>
                        Pesquisar</button>
                </div>
                <div>
                    {
                        listaFilmes.length > 0 ? 
                        <div className="listaFilmes">
                            {
                                listaFilmes.map(function(value, index){
                                    return  <div key={index} className="card" style={{width: "18rem"}}>
                                            <img src={value.Poster} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.Title}</h5>
                                                <p className="card-text">Ano: {value.Year}</p>
                                                <button className="btn btn-primary">Mais informações</button>
                                            </div>
                                        </div>
                                })
                            }
                        </div>
                        :
                        <></>
                    }
                </div>
        </div>
    )
}