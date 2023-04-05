import "@/styles/globals.css";
import { UserContextProvider } from "@/contexts/userContext";


export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
        <main>
          <Component {...pageProps} />
        </main>
    </UserContextProvider>
  );
}
