import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProtectedPage = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/api/auth/signin");
  //   }
  // }, [status]);


  return <>{children}</>;
};

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context);

  if (!session) {
    // return {
    //   redirect: {
    //     destination: "/api/auth/signin",
    //   },
    // };
  }
};

export default ProtectedPage;
