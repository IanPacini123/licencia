import React from "react";

import { Process } from "../../../../types/process";

const ProcessContainer: React.FC<{processo: Process}> = ({processo}) => {
    if (!processo) {
        return (
            <button className="bg-LicenciaLightBlue flex justify-between w-full p-8 rounded-3xl m-4 text-2xl font-bold text-LicenciaDarkGreen">
                <h1>+</h1>
                <h1>Criar um novo processo de licenciamento</h1>
                <h1></h1>
            </button>
        )
    }

    return (
        <button className="bg-LicenciaLightBlue flex justify-between w-full p-8 rounded-3xl m-4 text-2xl font-bold text-LicenciaDarkGreen">
                <div className="flex">
                    <h1>{processo.licensa} -</h1>
                    <h1><span>&nbsp;</span>{processo.nome}<span>&nbsp;</span></h1>
                    <h1>{processo.protocolo}</h1>
                </div>
                <h1></h1>
                <h1>></h1>
        </button>
    )
}

export default ProcessContainer;

