import { SiteClient } from "datocms-client";

export default async (req, res) => {
  if (req.method === "POST") {
    console.log("posting");
    const client = new SiteClient(process.env.DATO_API_TOKEN);
    const { imageUrl, title } = JSON.parse(req.body);
    console.log(JSON.stringify(req.body))
    console.log({
        itemType: "968423",
        imageUrl,
        title,
      })
    client.items
      .create({
        itemType: "968423",
        imageUrl,
        title,
      })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Error fetching api",
        });
      });
  } else if (req.method === "GET") {
    console.log("getting");
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
