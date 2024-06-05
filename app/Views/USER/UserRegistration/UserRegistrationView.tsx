"use client";

import React, {useState} from 'react';
import { useRouter } from "next/navigation";

import TextField from '../GeneralComponents/TextField';
import GreenButton from '../GeneralComponents/GreenButton';

const UserRegistationView: React.FC = () => {
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(false);

    const handleRegister = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false); 
        gotoLogin();
    };

    const gotoLogin = () => {
        router.push("/");
    }


    return (


        <div className="bg-white flex flex-col items-center rounded-2xl justify-center p-8 mt-20">
            {showPopup && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg flex flex-col items-center">
                        <text className='text-black text-2xl font-bold mx-10 mb-12 mt-8'>Registro concluído com sucesso!</text>
                        <div className='mx-10'>
                        <GreenButton label="Voltar ao Login" onClick={closePopup} />
                        </div>
                    </div>
                </div>
            )}

            <div className='flex items-start justify-between w-full'>
            <GreenButton label={"Voltar"} onClick={ gotoLogin }/>
            <text className='text-black text-2xl font-bold mb-20'>Registre-se como empreendedor</text>
            <GreenButton label={"Voltar"} isTransparent={true} onClick={ () => console.log("") }/>
            </div>

            <div className='items-start w-full mx-[100px] px-10'>
                <div className='flex mb-8'>
                    <div>
                    <TextField label='Razao social:' placeholder=''/>
                    </div>

                    <div className='ml-10'>
                    <TextField label='CPF/CNPJ:' placeholder=''/>
                    </div>
                </div>
                <div className='flex mb-8'>
                    <div>
                    <TextField label='Endereço:' placeholder=''/>
                    </div>

                    <div className='mx-10 w-[100px]'>
                    <TextField label='Nº:' placeholder=''/>
                    </div>

                    <div>
                    <TextField label='Complemento (Opcional):' placeholder=''/>
                    </div>
                </div>
                <div className='flex mb-8'>
                     <div>
                    <TextField label='E-mail:' placeholder=''/>
                    </div>

                    <div className='ml-10'>
                    <TextField label='Telefone:' placeholder=''/>
                    </div>

                </div>
                <div className='flex mb-12'>
                    <div>
                    <TextField label='Crie uma senha:' placeholder=''/>
                    </div>

                    <div className='ml-10'>
                    <TextField label='Confirme a senha:' placeholder=''/>
                    </div>
                </div>
            </div>

            <GreenButton label={"Registrar"} onClick={ handleRegister }/>
        </div>
    );

};

export default UserRegistationView;

