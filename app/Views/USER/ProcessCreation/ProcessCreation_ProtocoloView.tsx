"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import UserHeader from "../GeneralComponents/UserHeader";
import TextField from "../GeneralComponents/TextField";
import GreenButton from "../GeneralComponents/GreenButton";

const ProcessCreation_ProcotoloView: React.FC = () => {
    const router = useRouter();

    const nextPage = () => {
        router.push('/novo_processo_documentos');
    };

    const previousPage = () => {
        router.push('/novo_processo_documentos');
    };
    
    return (
        <div className='bg-LicenciaLightGreen h-screen flex flex-col'>
            <UserHeader/>
            
            <div className='flex-grow px-60 py-20'>
                <div className='flex flex-col bg-white items-center rounded-2xl p-6 h-full w-full text-black'>
                    <div>
                        <h1 className="text-black text-2xl font-bold mb-10">Iniciado um novo processo!</h1>
                    </div>
                    <div className="flex flex-col items-center bg-gray-300 mt-4 rounded-xl px-[80px] pb-[80px] pt-[40px]">
                        <h1 className="text-black text-2xl font-bold mb-12">Protocolo</h1>
                        <h1 className="text-black text-2xl mb-4">Processo nº 2024-1234/TEC/LS-0001</h1>
                        <h1 className="text-black text-2xl">Empresa de Fulano LTDA</h1>
                        <h1 className="text-black text-2xl mb-4">CNPJ 00.000.000/0001-00</h1>
                        <h1 className="text-black text-2xl">Bovinocultura extensiva</h1>
                        <h1 className="text-black text-2xl">Área (ha): 150</h1>
                        <h1 className="text-black text-2xl">Quantidade de animais: 100</h1>
                        <h1 className="text-black text-2xl">Fazenda de Fulano, s/n, Zona Rural</h1>
                        
                    </div>


                    <div className="flex justify-between w-full mt-auto">
                        <GreenButton label="< Voltar" onClick={previousPage}/>
                        <GreenButton label="Baixar" onClick={nextPage}/>
                        <GreenButton label="Imprimir" onClick={previousPage}/>
                        <GreenButton label="Baixar" onClick={nextPage}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProcessCreation_ProcotoloView;

