import { SiteClient } from "datocms-client";

export default async (req, res) => {
  if (req.method === "POST") {
    const client = new SiteClient(process.env.DATO_API_TOKEN);
    const { imageUrl, title } = JSON.parse(req.body);
    client.items
      .create({
        itemType: "968423",
        imageUrl,
        title,
      })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch(() => {
        res.status(500).json({
          message: "Error fetching api",
        });
      });
  } else if (req.method === "GET") {
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
        res.status(200).json({
          communities: response.data.allCommunities,
        });
      })
      .catch((err) =>
        res.status(500).json({
          message: "Error fetching api",
        })
      );
  }
};
