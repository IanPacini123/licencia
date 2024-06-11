"use client"; // Mark as a client component

import React from "react";
import { useRouter } from "next/navigation";

import TextField from "../GeneralComponents/TextField"; 
import GreenButton from "../GeneralComponents/GreenButton";

const LoginView: React.FC = () => {
    const router = useRouter();

    const handleLogin = () => {
        // Add login logic here if needed
    };

    const handleRegister = () => {
        router.push('/registration'); // Corrected the path
    };

    return (
        <div>
            <div style={{ width: '556px', height: '680px' }} className="bg-white flex flex-col items-center rounded-2xl justify-center p-8 m-20">
                <h1 className='text-black text-3xl font-bold mb-10'>Entre na plataforma</h1>
               <div className="w-[360px] mb-4">
                    <TextField placeholder="CPF/CNPJ" type="number" label="Login - CPF/CNPJ:"/>
                </div>
                <div className="w-[360px] mb-6">
                <TextField placeholder="Digite sua senha" label="Senha:"/>
                </div>
                <div className="mb-4">
                 <GreenButton label={"Entrar"} onClick={handleLogin}/>
               </div>
              <div className="mb-2">
                  <span className="text-black text-3xl font-bold">ou</span>
               </div>
               <div className="mb-4">
                  <GreenButton label={"Registrar"} onClick={handleRegister}/>
              </div>
          </div>
        </div>
    );
};

export default LoginView;
