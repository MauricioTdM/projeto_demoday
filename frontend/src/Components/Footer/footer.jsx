import S from './footer.module.scss'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'


export default function Footer() {
    return(
        <footer className={S.footer}>
            <section className={S.contacts}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""><img src={Facebook} alt="Logo do Facebook" /></a>
                    <a href=""><img src={Twitter} alt="Logo do Twitter" /></a>
                    <a href=""><img src={Youtube} alt="Logo do YouTube" /></a>
                    <a href=""><img src={Linkedin} alt="Logo do Linkedin" /></a>
                    <a href=""><img src={Instagram} alt="Logo do Instagram" /></a>
                </nav>
            </section>
            <section className={S.rights}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}