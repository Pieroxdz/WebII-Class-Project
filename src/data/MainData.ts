import { useAuth } from "../AuthContext"

interface NavItem {
    name:string
    url: string
}


export const navigationBase: NavItem[] = [
    { name: 'Inversiones', url: '/inversiones' },
    { name: 'Proveedores', url: '/proveedores' },
    { name: 'Empleados', url: '/empleados' },
    { name: 'Tienda', url: '/tienda' },
    { name: 'Directores', url: '/directores' },
    { name: 'Clientes', url: '/clientes' },
    { name: 'Clientes ordenar', url: '/clientesordenar' }
]


export const navigation = () => {
    const { isAunthenticated } = useAuth()
    return(
        navigationBase.filter( item =>  isAunthenticated || (
            item.name !== "Clientes" && item.name !== "Clientes Ordenar"
        ))
    )
}