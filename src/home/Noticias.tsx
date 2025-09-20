import noticia1 from "./../assets/images/chatgpt.jpg"
import noticia2 from "./../assets/images/claude.png"
import noticia3 from "./../assets/images/gemini.png"


const Noticias = () => {
    return (
        <>
            <section id='noticias' className="py-20">
                <div className="noticias-wrapper">
                    <h2>Noticias</h2>
                    <div className="flex gap-x-3">
                        <article className="w-full md:w-1/3">
                            <figure className="mb-3">
                                <img src={noticia1} alt="" />
                            </figure>
                            <h3>Noticia 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore dolore inventore officia? Minima doloribus architecto unde nostrum laborum ad nam, numquam consequatur commodi qui repudiandae beatae tempora hic cumque facilis quas.</p>
                            <p>Eos, ex totam fugit dolores veniam saepe officiis iure eveniet at eius quasi quae esse, possimus sit ab, quam debitis maiores natus accusantium cupiditate officia. Quo, excepturi error asperiores earum provident ducimus.</p>
                        </article>
                        <article className="w-full md:w-1/3">
                            <figure className="mb-3">
                                <img src={noticia2} alt="" />
                            </figure>
                            <h3>Noticia 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore dolore inventore officia? Minima doloribus architecto unde nostrum laborum ad nam, numquam consequatur commodi qui repudiandae beatae tempora hic cumque facilis quas.</p>
                            <p>Eos, ex totam fugit dolores veniam saepe officiis iure eveniet at eius quasi quae esse, possimus sit ab, quam debitis maiores natus accusantium cupiditate officia. Quo, excepturi error asperiores earum provident ducimus.</p>
                        </article>
                        <article className="w-full md:w-1/3">
                            <figure className="mb-3">
                                <img src={noticia3} alt="" />
                            </figure>
                            <h3>Noticia 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore dolore inventore officia? Minima doloribus architecto unde nostrum laborum ad nam, numquam consequatur commodi qui repudiandae beatae tempora hic cumque facilis quas.</p>
                            <p>Eos, ex totam fugit dolores veniam saepe officiis iure eveniet at eius quasi quae esse, possimus sit ab, quam debitis maiores natus accusantium cupiditate officia. Quo, excepturi error asperiores earum provident ducimus.</p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Noticias