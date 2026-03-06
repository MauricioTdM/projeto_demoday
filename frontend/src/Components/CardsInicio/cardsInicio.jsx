import S from './cardsInicio.module.scss'

export default function Cards({image, text}) {
    return(
        <article className={S.card}>
            <img src={image.src} alt={image.alt} />
            <p>{text}</p>
        </article>
    )
}