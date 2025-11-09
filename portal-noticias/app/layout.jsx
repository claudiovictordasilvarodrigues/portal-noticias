import './globals.css';
import Link from "next/link";
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from "./components/NavBar";
import { inter } from 'next/font/google'

export const metadada = {
  title: 'Portal de Noticias',
  description: 'Portal de noticias do Amazonas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="inter.className">
        <header>
          <Navbar />
          <Header title='Portal Tabatinga'/>
        </header>
        <main>
          { children }
        </main>
        <Footer />
      </body>
    </html>
  );
}