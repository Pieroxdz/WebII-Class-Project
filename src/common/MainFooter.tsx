import "./MainFooter.css"

const MainFooter = () => {
    return (
        <>
            <footer id="main-footer">
                <div className="footer-wrapper">
                    <div className="flex gap-x-3">
                        <div className="w-full md:w-1/2">
                            2025 Todos los derechos reservados
                        </div>
                        <div className="w-full md:w-1/2" id="redes-sociales">
                            <a href="">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MainFooter