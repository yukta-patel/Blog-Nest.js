import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../componets/layout";

const Container = styled.div`
  max-width: 768px;
  width: 90%;
  margin: 0 auto;
`;
const BlogTitle = styled.p`
  font-size: 2.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: justify;
  color: #d23669;
  margin: 0;
  margin-top: 5rem;
`;
const BlogContent = styled.p`
  font-size: 1.8rem;
  font-family: "Merriweather", serif;
  text-align: justify;
  margin: 0;
  padding: 1rem 0rem;
`;

const Post = ({ posts }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Layout />
      {posts !== null && (
        <>
          <BlogTitle>
            {posts.id}.{posts.title}
          </BlogTitle>
          <BlogContent>{posts.body}</BlogContent>
        </>
      )}
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`
  );
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}

export default Post;
