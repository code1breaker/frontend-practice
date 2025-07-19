import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Component {...pageProps} />
        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          closeOnClick={true}
          autoClose={3000}
          onClick={() => {
            console.log("object");
          }}
        />
      </SessionProvider>
    </>
  );
}

export default MyApp;
