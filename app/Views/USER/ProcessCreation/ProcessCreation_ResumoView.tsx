"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import UserHeader from "../GeneralComponents/UserHeader";
import TextField from "../GeneralComponents/TextField";
import GreenButton from "../GeneralComponents/GreenButton";

const ProcessCreation_ResumoView: React.FC = () => {
    const router = useRouter();

    const nextPage = () => {
        router.push('/novo_processo_documentos');
    };

    const previousPage = () => {
        router.push('/novo_processo_3');
    };
    
    return (
        <div className='bg-LicenciaLightGreen h-screen flex flex-col'>
            <UserHeader/>
            
            <div className='flex-grow px-60 py-20'>
                <div className='flex flex-col bg-white items-center rounded-2xl p-6 h-full w-full text-black'>
                    <div>
                        <h1 className="text-black text-2xl font-bold mb-10">Resumo das informações</h1>
                    </div>
                    <div className="bg-gray-300 w-full mt-4 rounded-xl p-[80px]">
                        <h1 className="text-black text-2xl font-bold">Empreendimento de João LTDA</h1>
                        <h1 className="text-black text-2xl font-bold mb-4">CNPJ 00.000.000/0001-00</h1>
                        <h1 className="text-black text-2xl font-bold">Bovinocultura extensiva</h1>
                        <h1 className="text-black text-2xl font-bold">Área (ha): 150</h1>
                        <h1 className="text-black text-2xl font-bold">Quantidade de animais: 100</h1>
                        <h1 className="text-black text-2xl font-bold mb-4">Fazenda de Fulano, s/n, Zona Rural</h1>
                        <h1 className="text-black text-2xl font-bold">Licença Simplificada</h1>
                        
                    </div>


                    <div className="flex justify-between w-full mt-auto">
                        <GreenButton label="< Voltar" onClick={previousPage}/>
                        <GreenButton label="Próximo >" onClick={nextPage}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProcessCreation_ResumoView;

