'use client'

import React from 'react';
import Menu from '../../components/template/Menu';
import Titulo from '@/components/template/title_home';
import { usePathname } from 'next/navigation';

const LayoutHome = ({ children }) => {
  const pathname = usePathname();
  
  // Define o título dinamicamente com base na rota
  const getTitleAndStep = () => {
    switch(pathname) {
      case '/home/cadastrarpessoa/dadosbasicos':
        return { titulo: "Cadastrar Pessoa", etapa: "Etapa (1)" };
      case '/home/cadastrarpessoa/infoadd':
        return { titulo: "Cadastrar Pessoa", etapa: "Etapa (2)" };
      case '/home/cadastrarpessoa/endereco':
        return { titulo: "Cadastrar Pessoa", etapa: "Etapa (3)" };
      case '/home/cadastrarpessoa/contato':
        return { titulo: "Cadastrar Pessoa", etapa: "Etapa (4)" };
      case '/home/cadastrarpessoa/responsavel':
        return { titulo: "Cadastrar Pessoa", etapa: "Etapa (5)" };
      case '/home/cadastrarpessoa/concluido':
        return { titulo: "Cadastrar Pessoa", etapa: "Concluído" };
      case '/home/registraratividade':
        return { titulo: "Registrar Pessoas", etapa: "" };
      case '/home/cadastrarusuario':
        return { titulo: "Cadastrar Usuário", etapa: "" };
      default:
        return { titulo: "Título Padrão", etapa: "" };
    }
  }

  const { titulo, etapa } = getTitleAndStep();

  return (
    <div className='flex'>
      <Menu />
      <div className='w-full h-full'>
        <div className='w-full flex items-center justify-center'>
          <Titulo titulo={titulo} etapa={etapa} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default LayoutHome;
