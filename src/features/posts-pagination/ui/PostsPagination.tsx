import styled from "styled-components";
import { types } from "../../../shared/types";
import { getPaginationButtons } from "../lib/utils";
import { constants } from "../../../shared/const";
import { Link, useParams } from "react-router-dom";
import { mixins } from "../../../shared/lib";
import { useEffect, useState } from "react";

type PostPaginationProps = {
  posts?: types.Post[];
};

export function PostsPagination(props: PostPaginationProps) {
  const { posts } = props;
  const [paginationButtons, setPaginationButtons] = useState<string[]>([]);
  const { numberPage } = useParams();

  useEffect(() => {
    if (posts) {
      setPaginationButtons(getPaginationButtons(posts));
    }
  }, [posts]);

  return (
    <Container $cntPaginationButtons={paginationButtons.length}>
      {paginationButtons.map((page) => (
        <LinkStyled
          $isActive={numberPage === page}
          key={page}
          to={`${constants.BrowserRoute.Posts}/${page}`}
        >
          {page}
        </LinkStyled>
      ))}
    </Container>
  );
}

const Container = styled.div<{ $cntPaginationButtons: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ $cntPaginationButtons }) => $cntPaginationButtons * 30}px;
  height: 30px;
  border-radius: 8px;
  overflow: hidden;
`;

const LinkStyled = styled(Link)<{ $isActive: boolean }>`
  ${mixins.ResetLink};
  pointer-events: ${({ $isActive }) => ($isActive ? "none" : "auto")};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  background-color: ${({ $isActive }) =>
    $isActive ? constants.Color.Green : constants.Color.GreenLight};
`;
