import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
const font = Nunito({
  subsets: ["latin"]
})
export default function App({ Component, pageProps }: AppProps) {
  return <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --font-sans: ${font.style.fontFamily};
        }`}} />
     <Component {...pageProps} />
    </>
}
