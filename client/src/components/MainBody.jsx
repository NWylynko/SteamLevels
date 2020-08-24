import React from "react";
import styled from "styled-components";

const MainBody = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      <ImageContainer>
        <UserAvatar src={data.avatarfull} />
      </ImageContainer>
      <Body>
      <Part>
        <p>Name: {data.personaname}</p>
        <p>Creation Date: {data.fullDate}</p>
        <p>User State: {data.userState}</p>
        <Horizontal>
          <p>Country: </p>
          <Flag src={data.flag} />
          <p>{data.country}</p>
        </Horizontal>
        <Horizontal>
          <p>Profile Url:</p>
          <a href={data.url}>{data.url}</a>
        </Horizontal>
      </Part>
      <Part>
        <p>level: {data.playerLevel}</p>
        <p>level Wanted: {data.level}</p>
        <p>Current XP: {data.playerXP}</p>
        <p>XP Needed: {data.difference}</p>
        <p>Sets: {data.badges}</p>
        <p>Price with TF2 Keys: ${data.tf2_keys}</p>
      </Part>
      </Body>
    </>
  );
};

const Body = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Horizontal = styled.div`
display: inline-flex;
flex-direction: row;
`;

const Part = styled.div`
  display: inline-grid;
  margin: 5px;
  padding: 5px;
`;

const ImageContainer = styled.div`
  width: auto;
  display: inline-flex;
  justify-content: center;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  height: 184px;
  width: 184px;
`;

const Flag = styled.img`
  height: 20px;
  margin: 5px;
  padding: 5px;
`;

export default MainBody;
