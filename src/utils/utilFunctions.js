import nookies from "nookies";

export const gitUserToCardInfo = (user) => {
  const { login, ...rest } = user;
  return {
    title: login,
    imageUrl: `https://github.com/${login}.png`,
    key: `person-${login}`,
    href: `https://github.com/${login}`,
    login,
    ...rest,
  };
};

export const formatGitUserJson = (rawJson) => {
  const { login, avatar_url } = rawJson;
  return {
    ...rawJson,
    title: login,
    imageUrl: avatar_url,
    key: `gituser-${login}`,
    href: `https://github.com/${login}`,
  };
};

export const decodeToken = async (token) => {
  try {
    const response = await fetch(`https://api.github.com/user`, {
      method: "GET",
      headers: {
        accept: "application/vnd.github.v3+json",
        Authorization: `token ${token}`,
      },
    });
    const { login } = await response.json();
    return {
      githubUser: login,
    };
  } catch {
    return {};
  }
};

export const sharedGetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies.USER_TOKEN;
  const { githubUser } = await decodeToken(token);

  if (!githubUser) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      githubUser,
      token,
    },
  };
};
