import React from 'react';
import FormInput from '@/components/template/inputText';
import NavigationButton from '@/components/template/botao';

const DadosBasicos = () => {
  return (
    <>
      <div className='h-60'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FormInput label="Primeiro Nome" name="nome_primeiro" placeholder="Digite o primeiro nome" />
          <FormInput label="Ultimo Nome" name="nome_ultimo" placeholder="Digite o ultimo nome" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
          <FormInput label="Data de Nascimento" name="data_nascimento" placeholder="DD/MM/AAAA" />
          <FormInput label="CPF" name="cpf" placeholder="Digite o CPF" />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <NavigationButton href="/home/cadastrarpessoa/infoadd" text="Avançar" />
      </div>
    </>
  );
};

export default DadosBasicos;
