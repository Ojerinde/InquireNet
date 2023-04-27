// import "@/styles/globals.css";
import "@/Stylesheets/main.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
