import S from './cardsLivros.module.scss'


export default function CardsLivros({bookData}) {
    return(
        <article className={S.bookBox}>
            <figure>
                <img src={bookData.image} alt={bookData.alter} />
            </figure>
            <section>
                <p>{bookData.title}</p>
                <p>{bookData.author}</p>
                <p>{bookData.genre}</p>
            </section>
        </article>
    )
}