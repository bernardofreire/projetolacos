// context/CadastroContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a interface dos dados que serão armazenados
interface CadastroData {
    dadosBasicos: {
        primeiroNome?: string;
        ultimoNome?: string;
        dataNasc?: string;
        cpf?: string;
    };
    infoAdicionais: {
        cadastroUnico?: string;
        nis?: string;
        escola?: string;
        tipoSanguineo?: string;
    };
    endereco: {
        endereco?: string;
        numero?: number;
        bairro?: string;
        cidade?: string;
        cep?: string;
    };
    contato: {
        email?: string;
        idade?: string;
        telResidencial?: string;
        telContato?: string;
        celular?: string;
    };
    responsavel: {
        nomeResponsavel?: string;
        rg?: string;
        grauParentesco?: string;
        telContatoResponsavel?: string;
        celularResponsavel?: string;
    };
}

// Define a interface para o contexto
interface CadastroContextType {
    cadastroData: CadastroData;
    updateCadastroData: (step: keyof CadastroData, data: Partial<CadastroData[keyof CadastroData]>) => void;
}

// Crie o contexto inicial com o tipo correto
const CadastroContext = createContext<CadastroContextType | undefined>(undefined);

// Hook para utilizar o contexto
export const useCadastro = (): CadastroContextType => {
    const context = useContext(CadastroContext);
    if (!context) {
        throw new Error('useCadastro must be used within a CadastroProvider');
    }
    return context;
};

// Componente provider
export const CadastroProvider = ({ children }: { children: ReactNode }) => {
    const [cadastroData, setCadastroData] = useState<CadastroData>({
        dadosBasicos: {},
        infoAdicionais: {},
        endereco: {},
        contato: {},
        responsavel: {},
    });

    // Função para atualizar os dados de cada etapa com tipagem mais precisa
    const updateCadastroData = (step: keyof CadastroData, data: Partial<CadastroData[keyof CadastroData]>) => {
        console.log("Atualizando dados:", { step, data }); // Log para verificação
        setCadastroData((prevState) => ({
            ...prevState,
            [step]: { ...prevState[step], ...data },
        }));
    };

    return (
        <CadastroContext.Provider value={{ cadastroData, updateCadastroData }}>
            {children}
        </CadastroContext.Provider>
    );
};
