import { useEffect, useState } from "react"
import type { Cliente } from "../types/Cliente"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"
import './Clientes.css'

const Clientes = () => {
    //HOOK
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])
    //Por página van a haber 10 filas
    const [filasPagina, setFilasPagina] = useState(10)
    const [numeroPagina, setNumeroPagina] = useState(1)
    const [totalFilas, setTotalFilas] = useState(0)
    const [totalPaginas, setTotalPaginas] = useState(0)

    useEffect(() => {
        leerServicio()
    }, [numeroPagina, filasPagina])

    const leerServicio = async () => {
        const ruta = `clientes_paginacion.php?filas_pagina=${filasPagina}&numero_pagina=${numeroPagina}`
        const response = await fetch(API_URL + ruta)
        const data = await response.json()
        // console.log(data)
        setListaClientes(data.clientes)
        setTotalFilas(data.total)
        const tPaginas = Math.ceil(data.total / filasPagina)
        setTotalPaginas(tPaginas)
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
                    {listaClientes.map(item =>
                        <tr key={item.idcliente}>
                            <td className="text-center">{item.idcliente}</td>
                            <td>{item.empresa}</td>
                            <td>{item.nombres}</td>
                            <td>{item.cargo}</td>
                            <td>{item.ciudad}</td>
                            <td className="text-right">{item.pais}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const retroceder = () => {
        if (numeroPagina > 1) {
            setNumeroPagina(numeroPagina - 1)
        }
    }

    const avanzar = () => {
        if (numeroPagina < totalPaginas) {
            setNumeroPagina(numeroPagina + 1)
        }
    }

    const dibujarNavegacion = () => {
        return (
            <>
                <nav id="barra-paginacion">
                    <button onClick={retroceder}>
                        Retroceder
                    </button>
                    {
                        Array.from({ length: totalPaginas }, (_, index) => {
                            const paginaNum = index + 1
                            const isActive = paginaNum === numeroPagina
                            return (
                                <button className={`${isActive ? "bg-amber-300" : ""}`} onClick={() => setNumeroPagina(paginaNum)}>{paginaNum}</button>
                            )
                        })
                    }
                    <button onClick={avanzar}>
                        Avanzar
                    </button>
                </nav>
            </>
        )
    }

    return (
        <>
            <PageHeader pageTitle='Clientes' pageSubtitle='' />
            <section id='clientes' className="py-20">
                <div className="clientes-wrapper">
                    {dibujarNavegacion()}
                    {dibujarTabla()}
                </div>
            </section>
        </>
    )
}

export default Clientes