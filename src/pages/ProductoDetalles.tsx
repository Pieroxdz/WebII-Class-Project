import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader"
import { useEffect, useState } from "react";
import type { Producto } from "../types/Producto";
import "./ProductoDetalle.css"
import { API_URL } from "../utils";

const ProductoDetalles = () => {
    const params = useParams();

    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto>();

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = async () => {
        const response = await fetch(API_URL + "productos.php?idproducto=" + params.idproducto)
        const data: Producto[] = await response.json()
        setProductoSeleccionado(data[0])
    }

    const precioRebajado = productoSeleccionado?.preciorebajado

    return (

        <>
            <PageHeader pageTitle={productoSeleccionado?.nombre || ""} pageSubtitle="" />

            <section className="py-20">
                <div className="productosdetalles-wrapper">
                    <div className="flex gap-3">
                        <div className="w-full md:w-1/2 px-3">
                            <img
                                src={`https://servicios.campus.pe/${productoSeleccionado?.imagengrande || "imagenes/nofoto.jpg"}`}
                                alt={productoSeleccionado?.nombre}
                                className="w-full object-cover px-8 pt-8 transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <table className="tabla-detalle-producto mb-4">
                                {productoSeleccionado && (
                                    <tbody>
                                        <tr>
                                            <th>Precio</th>
                                            <td>
                                                {`S/ ${productoSeleccionado?.preciorebajado === 0 ? productoSeleccionado?.precio.toFixed(2) : productoSeleccionado?.preciorebajado.toFixed(2)}`}
                                                <span className="ml-1 line-through text-red-600">
                                                    {precioRebajado === 0 ? "" : "S/ " + productoSeleccionado?.precio.toFixed(2)}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Proovedor</th>
                                            <td>{productoSeleccionado?.proveedor}</td>
                                        </tr>
                                        <tr>
                                            <th>Categoría</th>
                                            <td>{productoSeleccionado?.categoria}</td>
                                        </tr>
                                        <tr>
                                            <th>Stock</th>
                                            <td>{productoSeleccionado?.unidadesenexistencia === 0 ? "No hay Existencias" : productoSeleccionado?.unidadesenexistencia}</td>
                                        </tr>
                                        <tr>
                                            <th>Detalle</th>
                                            <td>{productoSeleccionado?.detalle}</td>
                                        </tr>
                                        <tr>
                                            <th>País</th>
                                            <td>{productoSeleccionado?.pais}</td>
                                        </tr>
                                        <tr>
                                            <th>Atención al Cliente</th>
                                            <td>{productoSeleccionado?.telefono}</td>
                                        </tr>
                                        <tr>
                                            <th>Calificación</th>
                                            <td>
                                                {[...Array(5)].map((_, index) => (
                                                    <i key={index} className={
                                                        index < productoSeleccionado?.promedioestrellas
                                                            ? "text-amber-400 fa-solid fa-star"
                                                            : "text-amber-400 fa-regular fa-star"
                                                    }></i>
                                                ))}
                                                &nbsp;({productoSeleccionado?.totalcalificaciones} calificaciones)
                                            </td>

                                        </tr>
                                    </tbody>
                                )}
                            </table>

                            <h3>Descripcion</h3>
                            <div dangerouslySetInnerHTML={{ __html: productoSeleccionado?.descripcion || "" }}></div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductoDetalles