import type { ItemCarrito } from "../types/ItemCarrito"
import type { Producto } from "../types/Producto"

export const API_URL = "https://servicios.campus.pe/"

export const agregarCarrito = (producto: Producto, cantidadProducto: number) => {
    const itemCarrito: ItemCarrito = {
        idproducto: producto.idproducto,
        nombre: producto.nombre,
        precio: producto.preciorebajado == 0? producto.precio : producto.preciorebajado,
        cantidad: cantidadProducto
    }

    let carrito: ItemCarrito[] = sessionStorage.getItem("carritocompras") == null ? [] : JSON.parse(sessionStorage.getItem("carritocompras") || "[]")
    const index: number = carrito.findIndex( p => p.idproducto === itemCarrito.idproducto)
    if(index === -1){
        carrito.push(itemCarrito)
    }else{
        carrito[index].cantidad += cantidadProducto
    }
    sessionStorage.setItem("carritocompras", JSON.stringify(carrito))
}