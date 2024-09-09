import React from 'react'
import FormInput from '@/components/template/inputText';
import NavigationButton from '@/components/template/botao';


const InformacaoAdicional = () => {
  return (
    <div>
      <>
        <div className='h-60'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FormInput label="CadÚnico" name="cadunico" placeholder="Digite o cadÚnico" />
            <FormInput label="NIS" name="nis" placeholder="Digite o NIS" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
            <FormInput label="Escola" name="escola" placeholder="Digite o nome da escola" />
            <FormInput label="Tipo Sanguíneo" name="tipo_sang" placeholder="Digite o tipo sanguíneo" />
          </div>
        </div>
        <div className="flex justify-between w-full mt-6">
          <NavigationButton href="/home/cadastrarpessoa/dadosbasicos" text="Voltar" />
          <NavigationButton href="/home/cadastrarpessoa/endereco" text="Avançar" />
        </div>
      </>
    </div>
  )
}

export default InformacaoAdicional