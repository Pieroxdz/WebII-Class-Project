import evento1 from "./../assets/images/evento1.png"
import evento2 from "./../assets/images/evento2.png"
import evento3 from "./../assets/images/evento3.png"
import evento4 from "./../assets/images/evento4.png"

const Eventos = () => {
    return (
        <>
            <section id="eventos" className="py-20">
                <div className="eventos-wrapper">
                    <h2>Eventos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={evento1} alt="Imagen de la tarjeta" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
                                <p className="text-gray-700 text-base">
                                    This is a longer card with supporting text below as a natural lead-in to addition
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={evento2} alt="Imagen de la tarjeta" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
                                <p className="text-gray-700 text-base">
                                    This is a longer card with supporting text below as a natural lead-in to addition
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={evento3} alt="Imagen de la tarjeta" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
                                <p className="text-gray-700 text-base">
                                    This is a longer card with supporting text below as a natural lead-in to addition
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={evento4} alt="Imagen de la tarjeta" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
                                <p className="text-gray-700 text-base">
                                    This is a longer card with supporting text below as a natural lead-in to addition
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Eventos