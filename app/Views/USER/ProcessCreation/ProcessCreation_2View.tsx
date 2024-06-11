"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import UserHeader from "../GeneralComponents/UserHeader";
import GreenButton from "../GeneralComponents/GreenButton";

const containerStyle = {
  width: '500px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const ProcessCreation_2: React.FC = () => {
    const router = useRouter();
    const [location, setLocation] = useState(center);

    const nextPage = () => {
        router.push('/novo_processo_3');
    };

    const previousPage = () => {
        router.push('/novo_processo');
    };

    const onMapClick = (event: google.maps.MapMouseEvent) => {
        setLocation({
            lat: event.latLng!.lat(),
            lng: event.latLng!.lng()
        });
    };

    return (
        <div className='bg-LicenciaLightGreen h-screen flex flex-col'>
            <UserHeader/>
            
            <div className='flex-grow px-60 py-20'>
                <div className='flex flex-col bg-white items-center rounded-2xl p-10 h-full w-full text-black'>
                    <div>
                        <h1 className="text-black text-2xl font-bold mb-20">Marque a localização do empreendimento</h1>
                    </div>
                    <div>
                        <LoadScript googleMapsApiKey="AIzaSyCrUUNPj46tqnl_9ma2G5p7ubbGXUdeiW4">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                                onClick={onMapClick}
                            >
                                <Marker position={location} />
                            </GoogleMap>
                        </LoadScript>
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

export default ProcessCreation_2;