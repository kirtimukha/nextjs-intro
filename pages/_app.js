import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({Component, pageProps}) {
    // pageProps 를 통해서 server side 를 통해 props를 페이지로 보낼 수 있다.
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}