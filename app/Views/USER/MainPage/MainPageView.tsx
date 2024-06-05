"use client";

import React, { useState } from 'react';
import { Process } from "../../../types/process";

import UserHeader from '../GeneralComponents/UserHeader';
import ProcessContainer from './Components/ProcessContainer';


const MainPageView = () => {
    const [processos, setProcessos] = useState<Process[]>([]);

    const addProcess = () => {
        const newProcess = {
            licensa: "123",
            nome: "Teste",
            protocolo: "456",
        }
        setProcessos([newProcess, ...processos]);
    }


    return (
        <div className='bg-LicenciaLightGreen h-screen flex flex-col'>
            <UserHeader/>
            
            <div className='flex-grow px-60 py-20'>
                <div className='flex flex-col bg-white items-center rounded-2xl p-10 h-full w-full text-black'>
                    <div>
                        <h1 className='text-black text-2xl font-bold mb-28'>Processos em andamento</h1>
                    </div>
                    {processos.length == 0 && 
                        <div className='flex flex-col items-center mb-16'>
                            <h1 className='text-red-500 font-bold text-xl'>Você ainda não possui nenhum</h1>
                            <h1 className='text-red-500 font-bold text-xl'>processo em andamento</h1>
                        </div>
                    }
                    {processos.length != 0 && 
                        <div style={{ maxHeight: '300px' }} className='overflow-y-auto overflow-x-hidden flex flex-col w-full'>
                            {processos.map((processo, index) => (
                                <ProcessContainer processo={processo}/>
                            ))}
                        </div>
                    }
                    <ProcessContainer processo={null}/>
                    <button onClick={addProcess}>Teste</button>
                </div>
            </div>
        </div>
    );
}

export default MainPageView;
