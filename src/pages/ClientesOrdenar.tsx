import { useEffect, useState } from "react"
import type { Cliente } from "../types/Cliente"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"
import './Clientes.css'

const ClientesOrdenar = () => {
    //HOOK
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])
    const [columna, setColumna] = useState('empresa')
    const [tipoOrden, setTipoOrden] = useState('ASC')
    const [ordenVisible, setOrdenVisible] = useState(true)

    useEffect(() => {
        leerServicio()
    }, [columna, tipoOrden])

    const leerServicio = async () => {
        const ruta = `clientes_ordenar.php?columna=${columna}&orden=${tipoOrden}`
        const response = await fetch(API_URL + ruta)
        const data = await response.json()
        // console.log(data)
        setListaClientes(data)
    }

    const dibujarTabla = () => {

        const IconoOrden = (nombreColumna: String) => {
            if (nombreColumna === columna) {

                const iconoClase = tipoOrden === 'ASC' ? 'fa-caret-up' : 'fa-caret-down'

                return (
                    <i className={`fa-solid ${iconoClase}`}></i>
                )
            }
        }

        return (
            <table className="tabla-reporte">
                <thead>
                    <tr>
                        <th className="!text-center">Codigo</th>
                        <th onClick={(e) => seleccionarColumna(e)} data-columna="empresa">Empresa {IconoOrden("empresa")}</th>
                        <th onClick={(e) => seleccionarColumna(e)} data-columna="nombres">Contacto {IconoOrden("nombres")}</th>
                        <th onClick={(e) => seleccionarColumna(e)} data-columna="cargo">Cargo {IconoOrden("cargo")}</th>
                        <th onClick={(e) => seleccionarColumna(e)} data-columna="ciudad">Ciudad {IconoOrden("ciudad")}</th>
                        <th onClick={(e) => seleccionarColumna(e)} data-columna="pais">Pais {IconoOrden("pais")}</th>
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


    const seleccionarColumna = (event: React.MouseEvent<HTMLTableCellElement>) => {
        let columnaSeleccionada = event.currentTarget.dataset.columna?.toString() || ""
        if (columnaSeleccionada === columna) {
            const orden = tipoOrden === 'DESC' ? 'ASC' : 'DESC'
            setTipoOrden(orden)
        } else {
            setTipoOrden('ASC')
        }
        setColumna(columnaSeleccionada)
    }

    return (
        <>
            <PageHeader pageTitle='Clientes' pageSubtitle='' />
            <section id='clientes' className="py-20">
                <div className="clientes-wrapper">
                    {dibujarTabla()}
                </div>
            </section>
        </>
    )
}

export default ClientesOrdenar