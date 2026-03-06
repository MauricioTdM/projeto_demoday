import S from './inicio.module.scss'
import Cards from '../../Components/CardsInicio/cardsInicio'
import Community from '../../assets/community.png'
import Reading from '../../assets/reading.png'
import Transform from '../../assets/transform.png'
import Balance from '../../assets/balance.png'


export default function Inicio() {
    return(
        <main>
            <section className={S.banner}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.boxDonate}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section>
                    <Cards 
                        image={{
                            src: Community,
                            alt: 'Imagem representando a comunidade'
                        }}
                        text='Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.'
                    />
                    <Cards
                        image={{
                            src: Reading,
                            alt: 'Uma pessoa lendo um livro'
                        }}
                        text='Estimula o hábito da leitura e o aprendizado contínuo.'
                    />
                    <Cards
                        image={{
                            src: Transform,
                            alt: 'Pessoas inspiradas pelo conhecimento'
                        }}
                        text='Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.'
                    />
                    <Cards
                        image={{
                            src: Balance,
                            alt: 'Imagem de uma balança'
                        }}
                        text='Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.'
                    />
                </section>
            </section>
        </main>
    )
}