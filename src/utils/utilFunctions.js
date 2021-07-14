export const gitUserToCardInfo = (user) => {
  return {
    title: user,
    image: `https://github.com/${user}.png`,
    key: `person-${user}`,
    href: `https://github.com/${user}`,
  };
};
