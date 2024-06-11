"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import UserHeader from "../GeneralComponents/UserHeader";
import TextField from "../GeneralComponents/TextField";
import GreenButton from "../GeneralComponents/GreenButton";

const ProcessCreation_1: React.FC = () => {
    const router = useRouter();
    const [tipoEmpreendimento, setTipoEmpreendimento] = useState('');

    const nextPage = () => {
        router.push('/novo_processo_2');
    };

    const previousPage = () => {
        router.push('/mainpage');
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoEmpreendimento(event.target.value);
    };

    return (
        <div className='bg-LicenciaLightGreen h-screen flex flex-col'>
            <UserHeader/>
            
            <div className='flex-grow px-60 py-20'>
                <div className='flex flex-col bg-white items-center rounded-2xl p-10 h-full w-full text-black'>
                    <div>
                        <h1 className="text-black text-2xl font-bold mb-28">Dados do Empreendimento</h1>
                    </div>
                    <div className="mb-8 w-full">
                        <label htmlFor="tipoEmpreendimento" className="block text-xl font-medium text-gray-700">Tipo de Empreendimento</label>
                        <select id="tipoEmpreendimento" name="tipoEmpreendimento" className="mt-1 p-2 block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md w-[350px]" value={tipoEmpreendimento} onChange={handleSelectChange}>
                            <option>Selecione o tipo de empreendimento</option>
                            <option>Agricultura Não Irrigada</option>
                            <option>Bovinocultura Extensiva</option>
                        </select>
                    </div>
                    <div className="flex items-start w-full">
                        <div className="w-[800px]">
                        <TextField label="Endereço do Empreendimento" placeholder=""/>
                        </div>
                    </div>
                    <div className="flex items-start w-full">
                        <div className="mr-10 w-[100px]">
                        <TextField label="Nº:" placeholder=""/>
                        </div>
                        <div className="mr-[100px]">
                        <TextField label="Complemento (Opicional):" placeholder=""/>
                        </div>
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

export default ProcessCreation_1;