import defaultAvatar from "./default_avatar.jpg";

export const handleData = (data, level) => {
  // timestamp to date
  const { timecreated: time = 907794930 } = data;
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const dt = date.getDate();
  const fullDate = dt + " " + month + " " + year;

  // user online/offline state with font color green/red
  const { personastate: state = 0 } = data;
  const userState = state === 0 ? "Offline" : "Online";
  const userStateColor = state === 0 ? "red" : "green";

  const { avatarfull: avatarfull = defaultAvatar } = data;
  const { personaname: personaname = "no Name" } = data;
  const { name: country = "unknown" } = data; // if the account has no set country output unknown with a green flag
  const { flag: flag = "https://restcountries.eu/data/mac.svg" } = data; // green flag
  const { profileurl: url = "Wrong user check it again." } = data;

  const { player_level: playerLevel = 0 } = data;
  const { player_xp: playerXP = 0 } = data;
  const differenceLVL = level - playerLevel;

  let difference, badges, tf2_keys;

  if (!level) {
    level = playerLevel + 1;
    const calc_xp = Math.ceil((level * (level * 5 + 50)) / 100) * 100;
    difference = calc_xp - playerXP;
    badges = Math.ceil(difference / 100); // sets needed to craft to get to wanted level
    tf2_keys = badges / 20; // u can buy 20 sets for 1 tf2 keys from traiding bot's
  } else if (differenceLVL < 0 || level > 5099) {
    // steam max level that you can get is 5099 (output 0) and diffrencelvl<0 means that the wanted level is smaller then the level that you have now
    difference = 0;
    badges = 0;
    tf2_keys = 0;
  } else {
    const calc_xp = Math.ceil((level * (level * 5 + 50)) / 100) * 100;
    difference = calc_xp - playerXP;
    badges = Math.ceil(difference / 100);
    tf2_keys = badges / 20;
  }

  return {
    fullDate,
    userState,
    userStateColor,
    avatarfull,
    personaname,
    country,
    flag,
    url,
    playerLevel,
    playerXP,
    difference,
    badges,
    tf2_keys,
    level
  };
};
