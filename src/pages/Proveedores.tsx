import { useEffect, useState } from "react"
import type { Proveedor } from "../types/Proveedor"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"

const Proveedores = () => {
    //HOOK
    const [listaProveedores, setListaProveedores] = useState<Proveedor[]>([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        fetch(API_URL + "proveedores")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaProveedores(data)
            })
    }

    const dibujarTabla = () => {
        return (
            <table className="tabla-reporte">
                <thead>
                    <tr>
                        <th className="!text-center">Codigo</th>
                        <th>Empresa</th>
                        <th>Contacto</th>
                        <th>Cargo</th>
                        <th>Ciudad</th>
                        <th className="!text-right">Pais</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProveedores.map(item =>
                        <tr key={item.idproveedor}>
                            <td className="text-center">{item.idproveedor}</td>
                            <td>{item.nombreempresa}</td>
                            <td>{item.nombrecontacto}</td>
                            <td>{item.cargocontacto}</td>
                            <td>{item.ciudad}</td>
                            <td className="!text-right">{item.pais}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    return (
        <>
            <PageHeader pageTitle='Proveedores' pageSubtitle='Construyendo alianzas para sólidas para crecer juntos' />
            <section id='proveedores' className="py-20">
                <div className="proveedores-wrapper">
                    {dibujarTabla()}
                </div>
            </section>
        </>
    )
}

export default Proveedores