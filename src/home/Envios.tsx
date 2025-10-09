import { useEffect, useState } from "react";
import type { Envio } from "../types/Envio";
import { API_URL } from "../utils";

const Envios = () => {

    const [listaEnvios, setListaEnvios] = useState<Envio[]>([]);

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        fetch(API_URL + "envios")
            .then(response => response.json())
            .then(data => {
                setListaEnvios(data)
            })
    }

    const dibujarTablar = () => {
        return (
            <>
                <table className="tabla-reporte">
                    <thead>
                        <tr>
                            <th className="text-center">Codigo</th>
                            <th>Empresa</th>
                            <th>Telefono</th>
                            <th>Latitud</th>
                            <th className="text-right">Ciudad</th>
                            <th className="text-right">Longitud</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaEnvios.map(item =>
                            <tr>
                                <td className="text-center">{item.idempresaenvio}</td>
                                <td>{item.nombre}</td>
                                <td>{item.telefono}</td>
                                <td className="text-right">{item.latitud}</td>
                                <td className="text-right">{item.longitud}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <>
            <section id='envios' className="py-20">
                <div className="envios-wrapper">
                    {dibujarTablar()}
                </div>
            </section>
        </>
    )
}

export default Envios