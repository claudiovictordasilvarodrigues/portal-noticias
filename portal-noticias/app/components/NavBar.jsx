import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex gap-3 justify-end font-bold text-sm text-blue-700 px-3 bg-blue-500'>
            <Link className='hover:text-white' href='/'>Home</Link>
            <Link className='hover:text-white' href='./sobre'>Sobre</Link>
            <Link className='hover:text-white' href='./noticias'>Noticias</Link>
        </nav>
    )
}

          
          
          