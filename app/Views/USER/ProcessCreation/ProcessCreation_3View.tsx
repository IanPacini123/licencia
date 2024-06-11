"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import UserHeader from "../GeneralComponents/UserHeader";
import TextField from "../GeneralComponents/TextField";
import GreenButton from "../GeneralComponents/GreenButton";

const ProcessCreation_3: React.FC = () => {
    const router = useRouter();
    const [tipoLicensa, setTipoLicensa] = useState('');

    const nextPage = () => {
        router.push('/novo_processo_resumo');
    };

    const previousPage = () => {
        router.push('/novo_processo_2');
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoLicensa(event.target.value);
    }

    return (
        <div className='bg-LicenciaLightGreen h-screen flex flex-col'>
            <UserHeader/>
            
            <div className='flex-grow px-60 py-20'>
                <div className='flex flex-col bg-white items-center rounded-2xl p-10 h-full w-full text-black'>
                    <div>
                        <h1 className="text-black text-2xl font-bold mb-16">Dados do Empreendimento</h1>
                    </div>
                    <div className="flex items-start w-full">
                        <div className="w-[400px]">
                        <TextField label="Area do projeto (Até 150 ha)" placeholder="" type="number"/>
                        </div>
                    </div>
                    <div className="flex items-start w-full">
                        <div className="w-[400px]">
                        <TextField label="Quantidade de Animais (Até 100)" placeholder="" type="number"/>
                        </div>
                    </div>
                    <div className="mb-8 w-full">
                        <label htmlFor="tipoLicensa" className="block text-xl font-medium text-gray-700">Escolha sua Licença:</label>
                        <select id="tipoLicensa" name="tipoLicensa" className="mt-1 p-2 block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md w-[350px]" value={tipoLicensa} onChange={handleSelectChange}>
                            <option>Selecione o tipo de licença</option>
                            <option>Licença Simplificada - LS</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label className="text-xl text-gray-700">{'Descreva brevemente o que é o investimento:'}</label>
                        <textarea
                            placeholder=""
                            className="p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black h-auto resize-none"
                            rows={5}
                        />
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

export default ProcessCreation_3;