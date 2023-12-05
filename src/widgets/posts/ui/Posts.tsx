import styled from "styled-components";
import { PostsList } from "../../../entities/posts-list/ui";
import { usePosts } from "../api/posts";
import { PostsPagination } from "../../../features/posts-pagination/ui";
import { getSearchedPosts, getSlicedPosts } from "../lib/utils";
import { useParams } from "react-router";
import { PostsSearch } from "../../../features/posts-search/ui";
import { useEffect, useState } from "react";
import { types } from "../../../shared/types";

export function Posts() {
  const [valueSearch, setValueSearch] = useState("");
  const [searchedPosts, setSearchedPosts] = useState<types.Post[]>([]);
  const { numberPage } = useParams();
  const { data: posts } = usePosts();

  useEffect(() => {
    if (posts && posts.length > 0) {
      setSearchedPosts(getSearchedPosts(valueSearch, posts));
    }
  }, [valueSearch, posts]);

  return (
    <Container>
      <PostsSearch setValueSearchHandler={setValueSearch} />
      <PostsList posts={getSlicedPosts(Number(numberPage), searchedPosts)} />
      <PostsPagination posts={searchedPosts} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
