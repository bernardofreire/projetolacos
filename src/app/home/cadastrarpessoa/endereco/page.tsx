import React from 'react'
import FormInput from '@/components/template/inputText';
import NavigationButton from '@/components/template/botao';

const Endereco = () => {
  return (
    <>
      <div className='h-60'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FormInput label="Endereço" name="endereco" placeholder="Digite o endereço" />
          <div className='flex gap-5'>
            <FormInput label="Nº" name="numero" placeholder="Número" />
            <FormInput label="Bairro" name="bairro" placeholder="Bairro" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
          <FormInput label="Cidade" name="cidade" placeholder="Digite a cidade" />
          <FormInput label="CEP" name="cep" placeholder="Digite o CEP" />
        </div>
      </div>
      <div className="flex justify-between w-full mt-6">
        <NavigationButton href="/home/cadastrarpessoa/infoadd" text="Voltar" />
        <NavigationButton href="/home/cadastrarpessoa/contato" text="Avançar" />
      </div>
    </>
  )
}

export default Endereco