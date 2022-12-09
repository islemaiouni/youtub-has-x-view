const { google } = require("googleapis");
require("dotenv").config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT
);

const getTokens = async () => {
  const res = await oauth2Client.getToken(
    "4/0Af90PXvutvmRviuP6d8H3lPkGkgRTWBDGiKKcQA9xg_ireF4H1NGoywlb_Bwc7NwbVxM0Og"
  );
  console.log(res.tokens);
};

getTokens();