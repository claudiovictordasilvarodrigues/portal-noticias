import Link from "next/link";

export const metadada = {
  title: 'Portal de Noticias',
  description: 'Portal de noticias do Amazonas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Link href='./sobre'>Sobre</Link>
          <Link href='./noticias'>Noticias</Link>
        </header>
        { children }
      </body>
    </html>
  );
}