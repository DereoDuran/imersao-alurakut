const axios = require("axios");

export default async (req, res) => {
  if (req.method === "GET") {
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
    const { code } = req.query;
    if (!code) {
      res.status(400).json({
        message: "You must specify a code",
      });
    }

    try {
      const response = await fetch(
        `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
        {
          method: "POST",
          headers: { accept: "application/json" },
        }
      );
      const { access_token } = await response.json();
      res.status(200).json({
        token: access_token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal error",
      });
    } finally {
      return;
    }
  }
  res.status(404).json({
    message: "Method is not implemented",
  });
};
