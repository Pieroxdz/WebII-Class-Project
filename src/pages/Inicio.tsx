import Nosotros from '../home/Nosotros'
import Noticias from '../home/Noticias'
import Historia from '../home/Historia'
import Eventos from '../home/Eventos'
import MainBanner from '../home/MainBanner'


const Inicio = () => {
    return (
        <>  <MainBanner></MainBanner>
            <Nosotros></Nosotros>
            <Noticias></Noticias>
            <Historia></Historia>
            <Eventos></Eventos>
        </>
    )
}

export default Inicio
