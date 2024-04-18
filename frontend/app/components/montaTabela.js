'use client'
import { useEffect } from "react"

export default function MontaTabela(props) {

    let cabecalho = props.lista.length > 0 ? Object.keys(props.lista[0]) : []

    useEffect(() => {
        console.log(props.lista)
    })

    return (
        <div>
            <table>
                <thead style={{backgroundColor: '#666', color: 'white'}}>
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
                        props.lista.map((value, index) => {
                            return <tr key={index}>
                                <td>{value.nome}</td>
                                <td>{value.email}</td>
                                <td>{value.dia}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}