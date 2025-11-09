import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader"
import type { ItemCarrito } from "../types/ItemCarrito";

const Carrito = () => {

    const [listaItems, setListaItems] = useState<ItemCarrito[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const datosCarrito = JSON.parse(sessionStorage.getItem("carritocompras") || "[]")
        setListaItems(datosCarrito)
        calcularTotal(datosCarrito)
    }

    const actualizarCantidad = (idproducto: number, nuevaCantidad: number) => {
        if (nuevaCantidad < 1 || isNaN(nuevaCantidad)) {
            return
        }

        const carritoActualizado = listaItems.map(item => {
            if (item.idproducto === idproducto) {
                return { ...item, cantidad: nuevaCantidad }
            }
            return item
        })

        setListaItems(carritoActualizado)
        sessionStorage.setItem("carritocompras", JSON.stringify(carritoActualizado))
        calcularTotal(carritoActualizado)
    }

    const dibujarTabla = () => {
        return (
            <table className="tabla-reporte">
                <thead>
                    <tr>
                        <th className="!text-center">Codigo</th>
                        <th>Producto</th>
                        <th className="!text-end">Precio</th>
                        <th className="!text-end">Cantidad</th>
                        <th className="!text-end">Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listaItems.map(item =>
                        <tr key={item.idproducto}>
                            <td className="!text-center">{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="!text-end">{item.precio.toFixed(2)}</td>
                            <td className="!text-end">
                                <button
                                    onClick={() => actualizarCantidad(item.idproducto, item.cantidad - 1)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2">-</button>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.cantidad}
                                    className="w-16 text-end mx-2 border border-gray-300 rounded px-2 py-1"
                                    onChange={(e) => actualizarCantidad(item.idproducto, parseInt(e.target.value) || 1)}
                                />
                                <button
                                    onClick={() => actualizarCantidad(item.idproducto, item.cantidad + 1)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2">+</button>
                            </td>
                            <td className="!text-end">{(item.precio * item.cantidad).toFixed(2)}</td>
                            <td className="!text-center">
                                <i
                                    className="fa-solid fa-xmark cursor-pointer hover:text-red-600 transition-transform 
                                    duration-300 ease-in-out hover:rotate-90"
                                    title="Eliminar"
                                    onClick={() => eliminarItem(item)}
                                ></i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const eliminarItem = (item: ItemCarrito) => {
        const carritoMenos = listaItems.filter(i => i.idproducto !== item.idproducto)
        setListaItems(carritoMenos)
        sessionStorage.setItem("carritocompras", JSON.stringify(carritoMenos))
        calcularTotal(carritoMenos)
    }

    const vaciarCarrito = () => {
        sessionStorage.removeItem("carritocompras")
        setListaItems([])
        setTotal(0)
    }

    const calcularTotal = (datosCarrito: ItemCarrito[]) => {
        const sumaTotal = datosCarrito.reduce((acumulador: number, item: ItemCarrito) => acumulador + (item.precio * item.cantidad), 0)
        setTotal(sumaTotal)
    }

    return (
        <>
            <PageHeader pageTitle="Carrito de compras" pageSubtitle="" />

            <section id='carrito' className="py-20">
                <div className="carrito-wrapper">
                    <div className="flex gap-3">
                        <div className="w-full md:w-3/4 px-3">
                            {dibujarTabla()}
                            <button className="btn-link mt-3 cursor-pointer" onClick={() => vaciarCarrito()}>
                                Vaciar Carrito
                            </button>
                        </div>
                        <div className="w-full md:w-1/4 p-5 bg-gray-200">
                            <h3>Total del carrito</h3>
                            <p>S/ {total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carrito