import styled from "styled-components";
import { PostCard } from "./PostCard";
import { types } from "../../../shared/types";

type PostsListProps = {
  posts?: types.Post[];
};

export function PostsList(props: PostsListProps) {
  const { posts } = props;

  return (
    <Container>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 10px;
`;
