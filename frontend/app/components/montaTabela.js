'use client'
import { useEffect } from "react"

export default function MontaTabela(props) {

    let cabecalho = []
    let propriedades = props.lista.length > 0 ? Object.keys(props.lista[0]) : [];

    if (props.cabecalhos == null || props.cabecalhos.length == 0) {
        cabecalho = props.lista.length > 0 ? Object.keys(props.lista[0]) : [];
    }
    else {
        cabecalho = props.cabecalhos
    }

    useEffect(() => {
        console.log(props.lista)
    })
    if (cabecalho.find(x => x == "Ações") == undefined)
        cabecalho.push("Ações");

    if (propriedades.find(x => x == "Ações") == undefined)
        propriedades.push("Ações");

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead style={{ backgroundColor: '#666', color: 'white' }}>
                    <tr>
                        {
                            cabecalho.map((value, index) => {
                                return <th key={index}>{value.includes("|") ? value.split("|")[0] : value}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.lista.map((value, index) => (
                            <tr>
                                {
                                    propriedades.map((cab, index) => {
                                        if (cab != 'Ações') {
                                            if (typeof (value[cab]) == "object") {
                                                let propObject = cabecalho[index].split("|")[1];
                                                return <td>
                                                    {value[cab][propObject]}
                                                </td>
                                            }
                                            else {
                                                return <td>
                                                    {value[cab]}
                                                </td>
                                            }
                                        }
                                        else {
                                            return <td>
                                                <div>
                                                    <a href={props.alteracao + `/${value.usuId}`} className="btn btn-primary  mr-1 mb-1"><i className="fas fa-pen"></i></a>
                                                    <button onClick={()=> props.exclusao(value.usuId)} className="btn btn-danger  mr-1 mb-1"><i className="fas fa-trash"></i></button>
                                                </div>
                                            </td>
                                        }
                                    })
                                }

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}