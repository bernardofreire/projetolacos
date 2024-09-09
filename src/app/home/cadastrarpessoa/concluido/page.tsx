import React from 'react'
import Image from 'next/image'
import NavigationButton from '@/components/template/botao';

const Concluido = () => {
  return (
    <div>
      <div>
        <Image
          src="/images/concluido.svg"
          alt="Picture of the author"
          width={180}
          height={180}
          draggable={false}
        />
      </div>
      <div>
        <NavigationButton href="/home/cadastrarpessoa/dadosbasicos" text="Confirmar" />
      </div>
    </div>
  )
}

export default Concluido