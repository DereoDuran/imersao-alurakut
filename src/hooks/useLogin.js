import { useRouter } from "next/router";
import nookies from "nookies";

export const useLogin = () => {
  const router = useRouter();

  const checkCode = async (code, setCheckingCode) => {
    setCheckingCode(true);
    const res = await fetch(`/api/check-code/${code}`);
    const { token } = await res.json();
    nookies.set(null, "USER_TOKEN", token, {
      path: "/",
      maxAge: 86400 * 7,
    });
    router.push("/");
  };

  const logOut = () => {
    nookies.set(null, "USER_TOKEN", "");
    router.push("/");
  };

  return { checkCode, logOut };
};
