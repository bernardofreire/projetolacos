"use client"; // Adicione esta linha para indicar que é um Client Component

import React, { useState } from 'react';
import FormInput from '@/components/template/inputText';
import NavigationButton from '@/components/template/botao';
import FormSelect from '@/components/template/inputSelect';
import classNames from 'classnames'; // Certifique-se de importar a biblioteca classNames

const Responsavel = () => {
  const [grauParentesco, setGrauParentesco] = useState(''); // Estado para armazenar o valor do select
  const [outroGrau, setOutroGrau] = useState(''); // Estado para armazenar a entrada do campo "Outro"

  // Função para manipular a mudança no select
  const handleSelectChange = (value: string) => {
    setGrauParentesco(value);
    // Limpar o campo "outroGrau" se a opção for diferente de "outros"
    if (value !== 'outros') {
      setOutroGrau('');
    }
  };

  return (
    <>
      <div className={classNames('grid', { 'h-60': grauParentesco !== 'outros', 'h-80': grauParentesco === 'outros' })}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FormInput className="col-span-2" label="Nome do responsável" name="nome_resp" placeholder="Digite o nome do responsável pela pessoa" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
          <FormInput label="RG" name="idade_atual" placeholder="Ex.:18" />
          <FormSelect
            label="Grau de parentesco"
            name="grau"
            placeholder="Selecione o grau"
            items={[
              { value: "pai", label: "Pai" },
              { value: "mae", label: "Mãe" },
              { value: "outros", label: "Outro" }
            ]}
            onChange={handleSelectChange} // Passa a função de controle do select
          />
        </div>

        {/* Campo para digitar o grau de parentesco caso "Outro" seja selecionado */}
        {grauParentesco === 'outros' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
            <FormInput
              label="Especificar Grau de Parentesco"
              name="outro_grau"
              placeholder="Digite o grau de parentesco"
              value={outroGrau} // Valor controlado do input
              onChange={(e) => setOutroGrau(e.target.value)} // Atualiza o valor digitado
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
          <FormInput label="Celular" name="celular" placeholder="(XX)XXXXX-XXXX" />
          <FormInput label="Tel. Contato" name="tel_res" placeholder="(XX)XXXX-XXXX" />
        </div>
      </div>
      <div className="flex justify-between w-full mt-6">
        <NavigationButton href="/home/cadastrarpessoa/contato" text="Voltar" />
        <NavigationButton href="/home/cadastrarpessoa/concluido" text="Concluir" />
      </div>
    </>
  );
}

export default Responsavel;
