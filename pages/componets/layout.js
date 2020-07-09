import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  margin: 0;
`;
const Button = styled.button`
  background-color: #d23669;
  border: 0;
  color: white;
  font-size: 1.3rem;
  padding: 0.5rem 1.3rem;
  border-radius: 0.3rem;
  height: 3rem;
  margin-top: 0.5rem;
  &:hover {
    background-color: grey;
    color: black;
    border: 0;
  }
`;
const Profile = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
`;
const ProfileImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;
const ProfileInfo = styled.div`
  padding-left: 0.9rem;
  font-size: 1.5rem;
  font-family: "Merriweather", serif;
  margin-top: 0.5rem;
`;

const Layout = ({ posts }) => {
  return (
    <>
      <Header>
        <H1>Overreacted</H1>
        {/* <Button>Home</Button> */}

        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Header>
      <Profile>
        <ProfileImg src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <ProfileInfo>
          <div>Personal blog by Dan Abramov.</div>
          <div>I explain with words and code.</div>
        </ProfileInfo>
      </Profile>
    </>
  );
};

export default Layout;
