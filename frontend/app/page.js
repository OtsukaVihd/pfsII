'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Formulario from './components/formulario'
import BemVindo from './components/bemvindo'
import { useEffect, useState } from 'react'

export default function Home() {

  let [teste, setTeste] = useState("")

  function stateTeste(){
    setTeste('Teste')
  }

  return (
    <div>
      <h1>Rota Inicial</h1>

    </div>
  )
}
