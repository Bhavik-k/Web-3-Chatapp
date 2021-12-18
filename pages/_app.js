import '../styles/globals.css'
import {MoralisProvider} from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
    appId='DR2Aywf2SkxEedVaB919apC8bNAeni9SQ1YXKAdJ'
    serverUrl= 'https://6ss06qovkjvi.usemoralis.com:2053/server'
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
