import Link from "next/link"
export default function Home() {
    return (
        <section>
            <h1>Bem-vindo ao seu portal de Noticias da Amazonia</h1>
            <p>Informacao Moderna e Atualizada</p>
            <button className="bg-white shadow text-blue-500 rounded-lg px-2 mt-10"><Link href='./noticias'>Ver Noticias</Link></button>
        </section>
    )
}