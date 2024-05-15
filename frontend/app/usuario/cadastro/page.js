'use client'
import FormUsuario from "@/app/components/formUsuario"
import { useEffect, useRef, useState } from "react"

export default function CadastroUsuario() {

    return (
        <div>
            <h1>
                Cadastro de usuários
            </h1>
            <FormUsuario/>
        </div>
    )
}