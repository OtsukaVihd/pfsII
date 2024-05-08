'use client'
import { useEffect } from "react"

export default function MontaTabela(props) {

    let cabecalho = []
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

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead style={{ backgroundColor: '#666', color: 'white' }}>
                    <tr>
                        {
                            cabecalho.map((value, index) => {
                                return <th key={index}>{value}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.lista.map((value, index) => (
                            <tr>
                                {
                                    cabecalho.map((cab, index) => {
                                        return <td>
                                            {value[cab]}
                                        </td>
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