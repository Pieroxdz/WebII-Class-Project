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
                            <td >{item.nombre}</td>
                            <td>{item.precio.toFixed(2)}</td>
                            <td>{item.cantidad}</td>
                            <td>{(item.precio * item.cantidad).toFixed(2)}</td>
                            <td><i
                                className="fa-solid fa-xmark cursor-pointer hover:text-red-600 transition-transform 
                            duration-300 ease-in-out hover:rotate-90"
                                title="Eliminar" onClick={() => eliminarItem(item)}></i></td>
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