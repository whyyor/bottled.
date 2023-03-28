import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { UserContextProvider } from "@/contexts/userContext";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
    </UserContextProvider>
  );
}
