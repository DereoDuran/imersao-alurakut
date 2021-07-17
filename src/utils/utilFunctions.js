export const gitUserToCardInfo = (user) => {
  return {
    title: user,
    imageUrl: `https://github.com/${user}.png`,
    key: `person-${user}`,
    href: `https://github.com/${user}`,
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
