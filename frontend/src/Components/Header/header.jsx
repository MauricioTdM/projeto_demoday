import S from './header.module.scss'
import logo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/inicio'
import LivrosDoados from '../../Pages/Doados/doados'
import QueroDoar from '../../Pages/QueroDoar/queroDoar'

export default function Header() {
    return(
        <BrowserRouter>
            <header className={S.header}>
                <section>
                    <img src={logo} alt="Logo do site" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Início</Link>
                        </li>
                        <li>
                            <Link to='/livrosdoados'>Livros Doados</Link>
                        </li>
                        <li>
                            <Link to='/querodoar'>Quero Doar</Link>
                        </li>
                    </ul>
                </nav>
                <div className={S.boxInput}>
                    <input type="text" placeholder='O que você procura?' />
                    <img src={lupa} alt="Imagem de uma lupa" />
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livrosdoados' element={<LivrosDoados/>}/>
                <Route path='/querodoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}