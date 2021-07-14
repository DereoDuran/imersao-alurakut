export const gitUserToCardInfo = (user) => {
  return {
    title: user,
    image: `https://github.com/${user}.png`,
    key: `person-${user}`,
    href: `https://github.com/${user}`,
  };
};

export const formatGitUserJson = (rawJson) => {
  const  { login, avatar_url } = rawJson;
  return {
    ...rawJson,
    title: login,
    image: avatar_url,
    key: `gituser-${login}`,
    href: `https://github.com/${login}`
  }
}
