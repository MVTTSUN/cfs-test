import { css } from "styled-components";

const ResetLink = css`
  text-decoration: none;
  color: inherit;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const ResetButton = css`
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export { ResetLink, ResetButton };
