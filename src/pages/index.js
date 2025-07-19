import ProtectedPage from "../components/ProtectedPage";
import Product from "../components/Product";
import productAxios from "../utils/productAxios";
import { signIn } from "next-auth/react";
import Link from "next/link";

const HomePage = ({}) => {
  return (
    <ProtectedPage>
      <h1>HomePage</h1>
      <div className="flex gap-2 flex-col items-start">
        <button>Next Level</button>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Signin
        </button>
        <button>
          <Link
            href={"/interview-questions"}
            className="text-black no-underline"
          >
            Interview Questions
          </Link>
        </button>
      </div>
      <Product />
    </ProtectedPage>
  );
};

export default HomePage;

export async function getServerSideProps(context) {
  try {
    // const session = await getSession(context);
    // const options = {
    //   headers: {
    //     Authorization: `Bearer ${session.accessToken}`,
    //   },
    // };
    // const response = await productAxios.get("/product");
    // const data = response.data;
    const data = {};

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: { data: null },
    };
  }
}
