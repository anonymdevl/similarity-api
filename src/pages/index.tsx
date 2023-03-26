import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-red-500 px-2">
      I can confidently start my New Project Now!
    </main>
  );
}
