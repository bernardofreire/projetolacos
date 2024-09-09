import React from 'react';
import Titulo from '@/components/template/title_home';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutCadastroPessoa = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-green-300 p-4 flex flex-col items-center">
      {/* Título Genérico, pode ser substituído em cada etapa */}
      <div className='w-full bg-purple-400 flex items-center justify-center'>
        <Titulo titulo="Cadastrar Pessoa" etapa="Etapas do Cadastro" />
      </div>
      <div className='w-full bg-purple-400 flex items-center justify-center'>
        <div className="bg-blue-800 w-full max-w-4xl h-full rounded-md p-4">
          {/* Barra de Progresso (pode ser dinâmica) */}
          <div className="bg-yellow-400 h-12 mb-4 rounded-md flex items-center justify-center">
            <span>Barra de Progresso</span>
          </div>

          {/* Container principal que recebe conteúdo das páginas */}
          <div className="bg-orange-500 flex-1 rounded-md p-4 flex flex-col items-center">
            <div className="w-full lg:w-4/6 bg-amber-700 p-6 rounded-md space-y-6">
              {children} {/* Aqui entra o conteúdo específico de cada etapa */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutCadastroPessoa;
