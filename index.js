const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static("public"));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/id", urlencodedParser, async (req, res) => {
  try {
    const id = req.query.user; // user input
    if (!id) throw new Error("no user id");

    const Steam_API_Key = "374FC5DFC4C3A58A0A8404F388147C0B"; //replace by your API key
    const SteamIdUrl = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${Steam_API_Key}&vanityurl=${id}`;

    const { response: { success, steamid } } = await (await fetch(SteamIdUrl)).json();
    if (success != 1) throw new Error("user not found");

    const BadgesURL = `http://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam_API_Key}&steamid=${steamid}`;
    const { response: Badges } = await (await fetch(BadgesURL)).json();
    if (!Badges) throw new Error("no badges info found");
    
    const { player_xp, player_level, player_xp_needed_to_level_up } = Badges;

    const PlayerSummariesURL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${Steam_API_Key}&steamids=${steamid}`;
    const { response: PlayerSummaries } = await (await fetch(PlayerSummariesURL)).json();

    const {
      personastate,
      personaname,
      profileurl,
      avatarfull,
      timecreated,
      loccountrycode,
    } = PlayerSummaries.players[0];

    const CountryURL = `https://restcountries.eu/rest/v2/alpha/${loccountrycode}`;
    const { flag, name } = await (await fetch(CountryURL)).json();

    const data = {
      player_xp,
      player_level,
      player_xp_needed_to_level_up,
      personastate,
      personaname,
      profileurl,
      avatarfull,
      timecreated,
      loccountrycode,
      flag,
      name,
    };

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
});