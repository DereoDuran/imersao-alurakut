export default async (req, res) => {
  fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      Authorization: process.env.DATO_API_TOKEN,
      "Content-Type": "application/json",
      Accept: "",
    },
    body: JSON.stringify({
      query: `query {
    allCommunities {
      id
      title
      imageUrl
      _status
      _firstPublishedAt
    }
    _allCommunitiesMeta {
      count
    }
  }`,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      res.send({
        communities: response.data.allCommunities,
      });
    });
};
