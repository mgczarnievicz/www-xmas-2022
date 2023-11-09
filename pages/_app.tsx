import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />

            <footer className="footer">Made By ❤️ at SPICED Academy</footer>
        </>
    );
}
