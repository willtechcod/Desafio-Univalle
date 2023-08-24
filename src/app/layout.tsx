import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { FC, PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desafio Univali - Cadastro com validação e restrições',
  description: 'Aqui mostro um pouco mais de meus conhecimentos como programador web, desafio proposto para vaga front-end.',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="pt" className={inter.className}>
      <body className="flex max-md:flex-col">{children}</body>
    </html>
  );
};
export default RootLayout;
