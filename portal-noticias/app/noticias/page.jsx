import Link from "next/link";
export default function New() {
    
    const noticias = [
        {id: 1, title:'COP30'},
        {id: 2, title:'TBT TecnoFest'},
        {id: 3, title:'Visita do Governador ao municipio de Tabatinga-AM'},
        {id: 4, title:'coisa qualquer'},
    ];

    return (
        <div className="max-w-5xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Noticias Recentes</h2>
            <div className="grid gap-4">
                {noticias.map((n) => (
                    <Link 
                        key={n.id} className="p-4 bg-blue-200 shadow rounded hover:shadow-md cursor-pointer transition"
                        href={`./noticias/${n.id}`}
                    >
                        <h3 className="text-lg  text-blue-800 font-medium">{n.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}