"use client";

import React from 'react';
import TextField from '../GeneralComponents/TextField';

const UserRegistationView: React.FC = () => {
    return (
        <div style={{ width: '1600px', height: '680px' }} className="bg-white flex flex-col items-center rounded-2xl justify-center p-8 m-20">
            <div className='bg-black items-start w-full'>
                <div className='flex'>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                    <div className='mx-8'>
                    <TextField label='' placeholder=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegistationView;