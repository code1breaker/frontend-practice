import { useRouter } from "next/router";
import React, { useId } from "react";
import { toast } from "react-toastify";

const getAdminAccessToken = async () => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", "clientA");
  urlencoded.append("client_secret", "LcmUqMXC1tAnwvzzKiPWwA8D1VnUMdEr");
  const tokenRes = await fetch(
    "http://localhost:8080" + "/realms/myrealm/protocol/openid-connect/token",
    { method: "POST", body: urlencoded }
  );

  const { access_token } = await tokenRes.json();
  return access_token;
};

const UserPage = ({ data = [], error = null }) => {
  const id = useId();
  const router = useRouter();
  console.log(router, "router");

  const editUser = async (user) => {
    try {
      const access_token = await getAdminAccessToken();

      const response = await fetch(
        `http://localhost:8080/admin/realms/myrealm/users/${user?.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: user?.firstName + id,
            lastName: user?.lastName,
            email: user?.email,
          }),
        }
      );
      console.log(response, "response");

      if (!response.ok) {
        throw new Error("User edited failed!!!");
      }

      const data = await response.text();
      router.push(router.asPath);
      toast.success("User edit succesfully");
      //   console.log(data, "77899");
    } catch (error) {
      console.log(error, "fdsmkl");
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {["Username", "First Name", "Last Name", "Email", "Actions"]?.map(
              (head) => (
                <th>{head}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              {[
                { key: "username", label: "Username" },
                { key: "firstName", label: "First Name" },
                { key: "lastName", label: "Last Name" },
                { key: "email", label: "Email" },
              ]?.map((head) => (
                <td>{item[head.key]}</td>
              ))}

              <td className="cursor-pointer" onClick={() => editUser(item)}>
                {" "}
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;

export const getServerSideProps = async () => {
  try {
    const access_token = await getAdminAccessToken();
    const response = await fetch(
      process.env.KEYCLOAK_ADMIN_BASE_URL + "/realms/myrealm/users",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error("failed!!!");
    }

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: [], error: "Failed to fetch users" },
    };
  }
};
