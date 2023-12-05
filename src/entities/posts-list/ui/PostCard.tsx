import styled from "styled-components";
import { types } from "../../../shared/types";
import { constants } from "../../../shared/const";
import { Link } from "react-router-dom";
import { mixins } from "../../../shared/lib";

type PostProps = {
  post: types.Post;
};

export function PostCard(props: PostProps) {
  const { post } = props;

  return (
    <LinkStyled to={`${constants.BrowserRoute.Post}/${post.id}`}>
      <Title>{post.title}</Title>
      <Content>{post.body}</Content>
    </LinkStyled>
  );
}

const LinkStyled = styled(Link)`
  ${mixins.ResetLink}
  cursor: pointer;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 25px;
  background-color: ${constants.Color.Light};
`;

const Title = styled.h2``;

const Content = styled.p``;
