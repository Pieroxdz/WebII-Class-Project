import nosotros from "./../assets/images/nosotros.png"

const Nosotros = () => {
    return (
        <>
            <section id='nosotros' className="py-20 text-white">
                <div className="nosotros-wrapper">
                    <div className="flex gap-x-3">
                        <div className="w-full md:w-1/3">
                            <figure>
                                <img src={nosotros} alt="" />
                            </figure>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2>Nosotros</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quos quod veniam nihil voluptates assumenda molestiae impedit blanditiis sit. Atque voluptatum tenetur iste consectetur ipsam excepturi suscipit natus non itaque pariatur optio incidunt saepe porro sit ea at, magnam sed consequatur cumque temporibus. Libero iste aspernatur reprehenderit ad nisi suscipit possimus sint at eum delectus quidem nostrum dignissimos voluptatem voluptates impedit, quas praesentium dolorem facilis, error animi perspiciatis. Accusantium fugiat est facilis fugit ipsam odio sed ducimus laboriosam repudiandae! Eaque sint numquam tempora officiis illo quibusdam incidunt corrupti quam maiores sit veniam quis consectetur itaque odit blanditiis, porro nihil unde alias natus in repellendus maxime? Voluptate quidem nihil blanditiis iure illo neque molestias. Explicabo in quod doloremque et aspernatur neque.</p>
                            <a href="" className="btn-link">
                                Más información
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Nosotros