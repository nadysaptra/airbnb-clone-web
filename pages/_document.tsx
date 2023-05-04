import Navbar from '@/components/navbar/Navbar';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar></Navbar>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
