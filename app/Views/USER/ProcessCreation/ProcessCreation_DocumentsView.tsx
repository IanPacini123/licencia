"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import UserHeader from "../GeneralComponents/UserHeader";
import TextField from "../GeneralComponents/TextField";
import GreenButton from "../GeneralComponents/GreenButton";

const ProcessCreation_DocumentsView: React.FC = () => {
    const router = useRouter();

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setFile(file);
    };

    const nextPage = () => {
        router.push('/novo_processo_protocolo');
    };

    const previousPage = () => {
        router.push('/novo_processo_resumo');
    };
    
    return (
        <div className='bg-LicenciaLightGreen h-screen flex flex-col'>
            <UserHeader/>
            
            <div className='flex-grow px-60 py-20'>
                <div className='flex flex-col bg-white items-center rounded-2xl p-6 h-full w-full text-black'>
                    <div>
                        <h1 className="text-black text-2xl font-bold mb-10">Anexo de documentos</h1>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col mr-24">
                            <div className="flex flex-col mb-10">
                                <h1 className="text-black text-lx font-bold mb-1 pl-4">Contrato social e aditivos:</h1>
                                <input type="file" onChange={handleFileChange} className="outline outline-1 rounded-lg py-2 px-8" />
                            </div>

                            <div className="flex flex-col mb-10">
                                <h1 className="text-black text-lx font-bold mb-1 pl-4">Escritura da propriedade:</h1>
                                <input type="file" onChange={handleFileChange} className="outline outline-1 rounded-lg py-2 px-8" />
                            </div>

                            <div className="flex flex-col mb-10">
                                <h1 className="text-black text-lx font-bold mb-1 pl-4">Contrato de arrendamento:</h1>
                                <input type="file" onChange={handleFileChange} className="outline outline-1 rounded-lg py-2 px-8" />
                            </div>

                            <div className="flex flex-col mb-10">
                                <h1 className="text-black text-lx font-bold mb-1 pl-4">Planta de localização georreferenciada:</h1>
                                <input type="file" onChange={handleFileChange} className="outline outline-1 rounded-lg py-2 px-8" />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-col mb-10">
                                <h1 className="text-black text-lx font-bold mb-1 pl-4">Comprovante de pagamento:</h1>
                                <input type="file" onChange={handleFileChange} className="outline outline-1 rounded-lg py-2 px-8" />
                            </div>

                            <div className="flex flex-col mb-10">
                                <h1 className="text-black text-lx font-bold mb-1 pl-4">Publicações:</h1>
                                <input type="file" onChange={handleFileChange} className="outline outline-1 rounded-lg py-2 px-8" />
                            </div>
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

export default ProcessCreation_DocumentsView;

