import { useParams } from "react-router";
import { usePost } from "./api/post";
import styled from "styled-components";

export function Post() {
  const { id } = useParams();
  const { data: post } = usePost(id);

  return (
    <>
      <Title>{post?.title}</Title>
      <Content>{post?.body}</Content>
    </>
  );
}

const Title = styled.h2``;

const Content = styled.p``;
