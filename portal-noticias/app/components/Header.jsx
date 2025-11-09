export default function Header({ title }) {
    return (
        <header className="bg-gradient-to-b from-blue-500 via-blue-400 text-white px-6 py-4 ">
            <h1 className="text-xl text-center font-semibold">{ title }</h1>
        </header>
    )
}