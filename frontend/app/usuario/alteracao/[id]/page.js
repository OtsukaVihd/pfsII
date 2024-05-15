import FormUsuario from "@/app/components/formUsuario";


export default function AlteracaoUsuario({params: {id}}){

    
    return(
        <div>
            <h1>Alteração de Usuários ({id})</h1>
            <FormUsuario/>
        </div>
    )
}