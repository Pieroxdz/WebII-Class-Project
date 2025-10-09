import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader"
import type { Categoria } from "../types/Categoria";
import Productos from "../components/Productos";
import { API_URL } from "../utils";

const Tienda = () => {

    const [listaCategorias, setListaCategorias] = useState<Categoria[]>([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null);

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = async () => {
        const response = await fetch(API_URL + "categorias.php")
        const data: Categoria[] = await response.json()
        setListaCategorias(data)
        setCategoriaSeleccionada(data[0])
    }

    //Va a recibir un parametro del tipo categoria definido en el interface
    const seleccionarCategoria = (itemSeleccionado: Categoria) => {
        setCategoriaSeleccionada(itemSeleccionado)
    }

    return (
        <>
            <PageHeader pageTitle="Tienda" pageSubtitle="Los mejores productos" />

            <section id='tienda' className="py-20">
                <div className="tienda-wrapper">
                    <div className="flex gap-x-3">
                        <div className="w-full md:w-1/4 px-3">
                            <h3>Categorías</h3>
                            <ul>
                                {listaCategorias.map(item =>
                                    <li className={"border-b border-gray-300 px-4 py-2 " + (item.idcategoria === categoriaSeleccionada?.idcategoria ? "bg-blue-100  " : "")}
                                        title={item.descripcion}
                                        key={item.idcategoria}
                                        onClick={() => seleccionarCategoria(item)}
                                    >
                                        {item.nombre}  ({item.total})</li>
                                )}
                            </ul>
                        </div>
                        <div className="w-full md:w-3/4 px-3">
                            <h2>{categoriaSeleccionada?.nombre}</h2>
                            <p>Hay {categoriaSeleccionada?.total} productos en total</p>
                            <Productos codigoCategoria={categoriaSeleccionada?.idcategoria || 0} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tienda