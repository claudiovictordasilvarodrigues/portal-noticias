import Link from "next/link";


export default async function NoticiasIndividual({ params }) {
    const { id } =  await params;

    //simulando dados da API
    const noticias = [
        {id: 1, title: 'Nova Tecnologia', text: 'conteudo new 1...'},
        {id: 2, title: 'fullstack', text: 'conteudo new 2...'},
        {id: 3, title: 'forense difital', text: 'conteudo new 3...'},
        {id: 4, title: 'Osint', text: 'conteudo new 4...'},
    ];

    //filtrando noticias
    const noticia = noticias.find(n => n.id === Number(id));

    //tratando erro
    if (!noticia) {
        return <h2>Noticia nao encontrada</h2>
    };

    return (
        <div>
            <h1>{noticia.title}</h1>
            <p>{noticia.text}</p>
            <button className="bg-white shadow text-blue-500 px-4 mt-10 rounded-lg "><Link href='../noticias'>Voltar</Link></button>
        </div>
    )
}