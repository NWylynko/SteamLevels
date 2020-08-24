import React from "react";
import styled from "styled-components";

import { ReactComponent as GithubSVG } from "../svg/github.svg";
import { ReactComponent as SteamSVG } from "../svg/steam.svg";
import { ReactComponent as SteamLevelsSVG } from "../svg/steamLevels.svg";

const Links = () => {
  return (
    <StyledLinks>
      <Link href="https://github.com/mistydz" target="_blank">
        <GithubSVG style={SVGStyle} />
      </Link>
      <Link href="https://steamcommunity.com/id/_misty/" target="_blank">
        <SteamSVG style={SVGStyle} />
      </Link>
      <Link href="https://github.com/Mistydz/SteamLevels" target="_blank">
        <SteamLevelsSVG style={SVGStyle} />
      </Link>
    </StyledLinks>
  );
};

const StyledLinks = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 10px;
  padding: 10px;
`;

const Link = styled.a`
  margin: 5px;
  padding: 5px;
`;

const SVGStyle = {
  filter: "invert(80%) brightness(200%)",
  height: 64,
  width: 64,
};

export default Links;
