import { useEffect, useState, type FormEvent } from "react"
import type { Director } from "../types/Director"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"

const Directores = () => {
    //HOOK
    const [listaDirectores, setListaDirectores] = useState<Director[]>([])
    const [mostrarInsertModal, setMostrarInsertModal] = useState(false)
    const [mostrarUpdateModal, setMostrarUpdateModal] = useState(false)
    const [mostrarDeleteModal, setMostrarDeleteModal] = useState(false)
    const [iddirector, setIddirector] = useState("")
    const [nombres, setNombres] = useState("")
    const [peliculas, setPeliculas] = useState("")

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
                                    title="Editar"
                                    onClick={() => seleccionarDirector(item)}
                                ></i>
                            </td>
                            <td>
                                <i
                                    className="fa-solid fa-xmark cursor-pointer hover:text-red-600 transition-transform 
                                    duration-300 ease-in-out hover:rotate-90"
                                    title="Eliminar"
                                    onClick={() => eliminarDirector(item)}
                                ></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const dibujarUpdateModal = () => {
        return (
            <div className={`fixed top-0 right-0 ${mostrarUpdateModal ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>

                <div className="absolute inset-0 bg-gray-600/50"></div>

                <div className={`fixed top-0 right-0 h-full max-w-sm bg-white shadow-xl p-6 transition-transform duration-300 transform ${mostrarUpdateModal ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-between items-center p-4">
                        <h5 className="text-xl font-semibold text-gray-800">Actualizar director</h5>
                        <button
                            type="button"
                            onClick={() => setMostrarUpdateModal(false)}
                            className="text-gray-400 hover:text-gray-900 text-2xl"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>

                    <form onSubmit={(e) => updateDirector(e)}>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={iddirector}
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Nombre del director"
                                required
                                minLength={4}
                                value={nombres}
                                onChange={(e) => setNombres(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Películas"
                                required
                                minLength={2}
                                value={peliculas}
                                onChange={(e) => setPeliculas(e.target.value)}
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                type="submit"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }

    const dibujarDeleteModal = () => {
        return (
            <div className={`fixed top-0 right-0 ${mostrarDeleteModal ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>

                <div className="absolute inset-0 bg-gray-600/50"></div>

                <div className={`fixed top-0 right-0 h-full max-w-sm bg-white shadow-xl p-6 transition-transform duration-300 transform ${mostrarDeleteModal ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-between items-center p-4">
                        <h5 className="text-xl font-semibold text-gray-800">Eliminar director</h5>
                        <p>¿Está seguro que desea eliminar el director <b>{nombres}</b>  con id: {iddirector}?</p>
                        <button
                            type="button"
                            onClick={() => setMostrarDeleteModal(false)}
                            className="text-gray-400 hover:text-gray-900 text-2xl"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>

                    <form onSubmit={(e) => deleteDirector(e)}>
                        <div className="mt-6">
                            <button
                                className=" bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                type="submit">
                                Eliminar
                            </button>
                            <button
                                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ml-1"
                                onClick={() => setMostrarDeleteModal(false)}
                                type="button">
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }

    const dibujarInsertModal = () => {
        return (
            <div className={`fixed top-0 right-0 ${mostrarInsertModal ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>

                <div className="absolute inset-0 bg-gray-600/50"></div>

                <div className={`fixed top-0 right-0 h-full max-w-sm bg-white shadow-xl p-6 transition-transform duration-300 transform ${mostrarInsertModal ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-between items-center p-4">
                        <h5 className="text-xl font-semibold text-gray-800">Nuevo director</h5>
                        <button
                            type="button"
                            onClick={() => setMostrarInsertModal(false)}
                            className="text-gray-400 hover:text-gray-900 text-2xl"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>

                    <form onSubmit={(e) => insertDirector(e)}>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Nombre del director"
                                required
                                minLength={4}
                                value={nombres}
                                onChange={(e) => setNombres(e.target.value)}
                            />

                        </div>

                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Películas"
                                required
                                minLength={2}
                                value={peliculas}
                                onChange={(e) => setPeliculas(e.target.value)}
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                type="submit"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }

    const insertDirector = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //Es una clase nativa
        const formData = new FormData()

        formData.append("nombres", nombres)
        formData.append("peliculas", peliculas)

        const response = await fetch(API_URL + "directoresinsert.php", {
            body: formData,
            method: "POST"
        })
        const data: string = await response.text()
        setMostrarInsertModal(false)
        leerServicio()
        setNombres("")
        setPeliculas("")

    }

    const seleccionarDirector = (director: Director) => {
        setIddirector(director.iddirector.toString())
        setNombres(director.nombres)
        setPeliculas(director.peliculas)
        setMostrarUpdateModal(true)
    }

    const eliminarDirector = (director: Director) => {
        setIddirector(director.iddirector.toString())
        setNombres(director.nombres)
        setPeliculas(director.peliculas)
        setMostrarDeleteModal(true)
    }

    const updateDirector = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //Es una clase nativa
        const formData = new FormData()

        formData.append("iddirector", iddirector)
        formData.append("nombres", nombres)
        formData.append("peliculas", peliculas)

        const response = await fetch(API_URL + "directoresupdate.php", {
            body: formData,
            method: "POST"
        })

        const data: string = await response.text()
        setMostrarUpdateModal(false)
        leerServicio()
        setIddirector("")
        setNombres("")
        setPeliculas("")
    }

    const deleteDirector = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //Es una clase nativa
        const formData = new FormData()

        formData.append("iddirector", iddirector)


        const response = await fetch(API_URL + "directoresdelete.php", {
            body: formData,
            method: "POST"
        })

        const data: string = await response.text()
        setMostrarDeleteModal(false)
        leerServicio()
        setIddirector("")
        setNombres("")
        setPeliculas("")
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
                    {dibujarUpdateModal()}
                    {dibujarDeleteModal()}
                </div>
            </section>
        </>
    )
}

export default Directores