import { useEffect, useState } from "react"
import type { Proveedor } from "../types/Proveedor";
import PageHeader from "../components/PageHeader";

const Proveedores = () => {

    const [listaProveedores, setListaProveedores] = useState<Proveedor[]>([]);

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        fetch("https://servicios.campus.pe/proveedores")
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setListaProveedores(data)
            })
    }

    return (
        <>
            <section id='proveedores' className="py-20">
                <div className="proveedores-wrapper">

                    <PageHeader pageTitle="Inversiones" pageSubtitle="Construyendo alianzas sólidas para crecer juntos" />


                    <table className="tabla-reporte">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Empresa</th>
                                <th>Contacto</th>
                                <th>Cargo</th>
                                <th>Ciudad</th>
                                <th>País</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaProveedores.map(item =>
                                <tr>
                                    <td>{item.idproveedor}</td>
                                    <td>{item.nombreempresa}</td>
                                    <td>{item.nombrecontacto}</td>
                                    <td>{item.ciudad}</td>
                                    <td>{item.cargocontacto}</td>
                                    <td>{item.pais}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Proveedores