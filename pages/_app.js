import "../styles/globals.css";
import Layout from "../components/Layout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




export default function App({ Component, pageProps }) {
  return (<>
    <Layout>
    <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Layout>
  </>
  );
}
