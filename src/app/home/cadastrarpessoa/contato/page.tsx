import React from 'react'
import FormInput from '@/components/template/inputText';
import NavigationButton from '@/components/template/botao';

const Contato = () => {
  return (
    <>
      <div className='h-60'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FormInput className="col-span-2" label="E-mail" type="email" name="email" placeholder="Email@email.com" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
          <FormInput label="Idade Atual" name="idade_atual" placeholder="Ex.:18" />
          <FormInput label="Tel. Residencial" name="tel_res" placeholder="(XX)XXXX-XXXX" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
          <FormInput label="Celular" name="celular" placeholder="(XX)XXXXX-XXXX" />
          <FormInput label="Tel. Contato" name="tel_res" placeholder="(XX)XXXX-XXXX" />
        </div>
      </div>
      <div className="flex justify-between w-full mt-6">
        <NavigationButton href="/home/cadastrarpessoa/endereco" text="Voltar" />
        <NavigationButton href="/home/cadastrarpessoa/responsavel" text="Avançar" />
      </div>
    </>
  )
}

export default Contato