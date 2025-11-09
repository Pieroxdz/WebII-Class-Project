import { useEffect, useState } from "react"
import type { Director } from "../types/Director"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"

const Directores = () => {
    //HOOK
    const [listaDirectores, setListaDirectores] = useState<Director[]>([])
    const [mostrarInsertModal, setMostrarInsertModal] = useState(false)

    useEffect(() => {
        leerServicio()
    }, [])


    const leerServicio = async () => {
        try {
            const response = await fetch(API_URL + "directores.php")
            const data: Director[] = await response.json()
            setListaDirectores(data)
        } catch (error) {
            console.error("Error al obtener los directores:", error)
        }
    }

    const dibujarTabla = () => {
        return (
            <table className="tabla-reporte">
                <thead>
                    <tr>
                        <th className="!text-center">Codigo</th>
                        <th>Nombres</th>
                        <th>Peliculas</th>
                        <th>Cargo</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDirectores.map(item =>
                        <tr key={item.iddirector}>
                            <td className="text-center">{item.iddirector}</td>
                            <td>{item.nombres}</td>
                            <td>{item.peliculas}</td>
                            <td>
                                <i
                                    className="fa-solid fa-pencil cursor-pointer hover:text-red-600 transition-transform 
                                    duration-300 ease-in-out hover:rotate-90"
                                    title="Eliminar"
                                ></i>
                            </td>
                            <td>
                                <i
                                    className="fa-solid fa-xmark cursor-pointer hover:text-red-600 transition-transform 
                                    duration-300 ease-in-out hover:rotate-90"
                                    title="Eliminar"
                                ></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const dibujarInsertModal = () => {
        return (
            <div className={`fixed top-0 right-0 ${mostrarInsertModal ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>
                MODAL
            </div>
        )
    }

    return (
        <>
            <PageHeader pageTitle='Directores' pageSubtitle='' />
            <section id='directores' className="py-20">
                <div className="directores-wrapper">
                    <div className="mb-6">
                        <button
                            onClick={() => setMostrarInsertModal(true)}
                            className="bg-amber-600 text-white py-2 px-4">Nuevo director</button>
                    </div>
                    {dibujarTabla()}
                    {dibujarInsertModal()}
                </div>
            </section>
        </>
    )
}

export default Directores