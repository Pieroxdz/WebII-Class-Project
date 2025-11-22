import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"
import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()
    const { isAunthenticated, login } = useAuth()

    useEffect(() => {
        if (isAunthenticated) {
            navigate("/")
        }
    }, [isAunthenticated, navigate])

    const [correotelefono, setCorreoTelefono] = useState("")
    const [clave, setClave] = useState("")
    const [mostrarClave, setMostrarClave] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const iniciarSesion = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        try {
            const formData = new FormData()
            formData.append("correotelefono", correotelefono)
            formData.append("clave", clave)

            const response = await fetch(API_URL + "login.php", {
                body: formData,
                method: "POST"
            })

            const data: string = await response.text()
            switch (data) {
                case "-1": setErrorMessage("El correo electrónico o teléfono no está registrado")
                    break;
                case "-2": setErrorMessage("La contraseña es incorrecta")
                    break;
                default: setErrorMessage("")
                    let datosUsuario = JSON.parse(data)
                    login(datosUsuario[0].nombre)
                    navigate("/perfil")
                    break;
            }
        } catch (error) {
            alert("Ha ocurrido el error: " + error)
        }

    }


    return (
        <>
            <PageHeader pageTitle="Iniciar sesión" pageSubtitle="" />
            <section id="login" className="py-20">
                <div className="login-wrapper">
                    <div className="flex -mx-3">
                        <div className="w-full md:w-1/4 px-3">
                            <form onSubmit={(e) => iniciarSesion(e)}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Correo electrónico o telefono"
                                        required
                                        minLength={4}
                                        value={correotelefono}
                                        onChange={(e) => setCorreoTelefono(e.target.value)}
                                    />

                                </div>

                                <div className="mb-4">
                                    <input
                                        type={mostrarClave ? "text" : "password"}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Contraseña"
                                        required
                                        minLength={2}
                                        value={clave}
                                        onChange={(e) => setClave(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <input type="checkbox" checked={mostrarClave} onChange={e => setMostrarClave(e.target.checked)} /> Mostrar Clave
                                </div>

                                <div className="mt-6">
                                    <button
                                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                        type="submit"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>

                                {errorMessage &&
                                    <div className="mt-6 p-4 rounded bg-red-100 text-red-700 border border-red-400 mb-3">
                                        {errorMessage}
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login