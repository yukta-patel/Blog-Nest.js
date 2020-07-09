import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Layout from "./componets/layout.js";

const Container = styled.div`
  max-width: 768px;
  width: 90%;
  margin: 0 auto;
`;
const BlogDiv = styled.div`
  margin-top: 5rem;
`;
const BlogCard = styled.div`
  margin-top: 1rem;
`;
const BlogTitle = styled.p`
  font-size: 2.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: justify;
  color: #d23669;
  margin: 0;
  margin-top: 3.5rem;
`;
const BlogContent = styled.p`
  font-size: 1.8rem;
  font-family: "Merriweather", serif;
  text-align: justify;
  margin: 0;
  padding: 1rem 0rem;
`;
const A = styled.a`
  text-decoration: none;
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
  }
`;
const ReadMore = styled.a`
  font-size: 1.2rem;
  color: #d23669;
  font-weight: bold;
  user-select: none;
  &:hover {
    color: blue;
  }
`;

const Home = ({ posts }) => {
  return (
    <Container>
      <Layout />
      <BlogDiv>
        {posts !== null &&
          posts.map((post) => (
            <BlogCard>
              <BlogTitle>
                {post.id}.
                <Link href={`/post/${post.id}`}>
                  <A>{post.title}</A>
                </Link>
              </BlogTitle>
              <BlogContent>{post.body}</BlogContent>
              <Link href={`/post/${post.id}`}>
                <ReadMore>Read More</ReadMore>
              </Link>
            </BlogCard>
          ))}
      </BlogDiv>
    </Container>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
