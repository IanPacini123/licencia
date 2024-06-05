"use client";

import React from "react";
import { useRouter } from "next/navigation";

import ExitIcon from "../../../assets/ExitIcon";

const UserHeader = () => {
    const router = useRouter();

    const leave = () => {
        router.push('/');
    }

    return (
        <header className="bg-LicenciaDarkGreen h-20 flex items-center justify-between px-8">
            <div className="flex items-center">
                <button className="w-[24px] mr-4" onClick={leave}>
                    <ExitIcon/>
                </button>

                <div className='flex items-end'>
                    <h1 className="text-white text-4xl font-bold">LicencIA</h1>
                    <h1 className="text-white text-md font-bold ml-4">Prefeitura de lugar nenhum</h1>
                </div>
            </div>

            
        </header>
    );
}

export default UserHeader;


