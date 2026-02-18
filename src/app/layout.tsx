
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gelatina Glow - Método Natural de Emagrecimento',
  description: 'Elimine até 2kg em 14 dias de forma natural com o método Gelatina Anti-Caneta.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">{children}</body>
    </html>
  );
}
