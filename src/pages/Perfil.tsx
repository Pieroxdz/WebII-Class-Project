import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"


const Perfil = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    return (
        <>
            <section id='perfil' className="py-20">
                <div className="perfil-wrapper">
                    <h1>Perfil</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae, laboriosam earum a dolor id labore pariatur corrupti, ad ea ipsa, eveniet in. Veniam ab magni facilis. Molestias eaque at fugit blanditiis repellendus aut. Praesentium porro odit quidem totam quod incidunt, asperiores repellendus possimus officia labore accusamus temporibus inventore explicabo tenetur, consectetur cum facilis eius velit consequatur nostrum repudiandae doloribus. Facilis veniam minus commodi. Explicabo quod sit numquam cumque eaque eligendi ratione voluptates, quibusdam dicta illum aliquid laudantium odio mollitia cum ea. Perspiciatis aliquam a, ex enim officia soluta autem! Consequuntur illum officiis accusamus, quis corrupti dicta quibusdam repellat nisi!</p>
                    <button
                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        type="submit"
                        onClick={() => {
                            logout()
                            navigate("/login")
                        }}
                    >Cerrar sesion</button>
                </div>
            </section >
        </>
    )
}

export default Perfil