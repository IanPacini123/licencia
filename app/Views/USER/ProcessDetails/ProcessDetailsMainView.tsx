"use client";

import React from 'react';
import { useRouter } from "next/navigation";

import GreenButton from '../GeneralComponents/GreenButton';
import UserHeader from '../GeneralComponents/UserHeader';

const ProcessDetailsMainView: React.FC = () => {
    const router = useRouter();

    return (

        <div className='bg-LicenciaLightGreen h-screen'>
            <UserHeader />

            <div className='flex flex-col items-center justify-center mt-[80px]'>
                <GreenButton label="Texto" onClick={() => {}}/>

                <h1 className='font-bold text-3xl text-red-700'>Texto massa!</h1>

            </div>

        </div>

    )
}

export default ProcessDetailsMainView;