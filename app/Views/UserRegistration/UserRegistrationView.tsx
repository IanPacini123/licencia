"use client";

import React from 'react';
import TextField from '../GeneralComponents/TextField';
import GreenButton from '../GeneralComponents/GreenButton';

const UserRegistationView: React.FC = () => {
    return (
        <div className="bg-white flex flex-col items-center rounded-2xl justify-center p-8 m-20">
            <div className='flex items-start justify-between w-full'>
            <GreenButton label={"Voltar"}/>
            <text className='text-black text-2xl font-bold mb-20'>Registre-se como empreendedor</text>
            <GreenButton label={"Voltar"} isTransparent={true} />
            </div>
            <div className='items-start w-full'>
                <div className='flex mb-12'>
                    <div>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='ml-10'>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
                <div className='flex mb-12'>
                    <div>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='mx-10'>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
                <div className='flex mb-12'>
                     <div>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='ml-10'>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
                <div className='flex mb-20'>
                    <div>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='ml-10'>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
            </div>

            <GreenButton label={"Registrar"}/>
        </div>
    );
};

export default UserRegistationView;