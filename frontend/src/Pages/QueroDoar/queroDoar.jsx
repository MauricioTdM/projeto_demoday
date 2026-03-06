import S from './queroDoar.module.scss'
import Book from '../../assets/book.png'
import axios from 'axios'
import { useState } from 'react'


export default function QueroDoar() {
    const [titulo, setTitutlo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async() => {
        const urlApi = "https://desafio-2-api-livros-vai-na-web-z4jx.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        const envioApi = await axios.post(urlApi, dadosEnviar)

        alert('Livro enviado')

        setTitutlo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

    const capturaTitulo = (e) => {
        setTitutlo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImagem_url = (e) => {
        setImagem_url(e.target.value)
    }

    return(
        <main className={S.main}>
            <section className={S.title}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            </section>
            <section className={S.formSection}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <img src={Book} alt="Logo de um livro aberto" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Título' onChange={capturaTitulo} value={titulo}/>
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder='Link da Imagem' onChange={capturaImagem_url} value={imagem_url}/>
                    <input className={S.doar} type="submit" value="Doar" onClick={enviarDados} />
                </form>
            </section>
        </main>
    )
}