import { useEffect, useState } from "react"
import type { Proveedor } from "../types/Proveedor"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"

const Proveedores = () => {
    //HOOK
    const [listaProveedores, setListaProveedores] = useState<Proveedor[]>([])
    const [loading, setLoading] = useState(true)

    //Efectos que ocurren la primera vez que el componente se monta o renderiza
    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = async () => {
        //fetch(API_URL + "proveedores")
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     setListaProveedores(data)
        // })

        const response = await fetch(API_URL + "proveedores.php")
        const data: Proveedor[] = await response.json()
        setListaProveedores(data)
        setLoading(false)
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

    const dibujarPrecarga = () => {
        return (
            <span className="loader"></span>
        )
    }

    return (
        <>
            <PageHeader pageTitle='Proveedores' pageSubtitle='Construyendo alianzas para sólidas para crecer juntos' />
            <section id='proveedores' className="py-20">
                <div className="proveedores-wrapper">
                    {loading === true ? dibujarPrecarga() : dibujarTabla()}
                </div>
            </section>
        </>
    )
}

export default Proveedores