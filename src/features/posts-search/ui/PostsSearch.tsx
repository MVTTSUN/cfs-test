import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { constants } from "../../../shared/const";
import { mixins } from "../../../shared/lib";

type PostSearchProps = {
  setValueSearchHandler: (value: string) => void;
};

export function PostsSearch(props: PostSearchProps) {
  const { setValueSearchHandler } = props;
  const [valueSearch, setValueSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    navigate(`${constants.BrowserRoute.Posts}/1`);
    setValueSearchHandler(valueSearch);
  };

  return (
    <Form $isFocus={isFocus} onSubmit={onSubmit}>
      <InputSearch
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
        type="text"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <Button>Поиск</Button>
    </Form>
  );
}

const Form = styled.form<{ $isFocus: boolean }>`
  display: flex;
  align-items: center;
  height: 30px;
  border: 3px solid ${constants.Color.Orange};
  border-radius: 15px;
  overflow: hidden;
  outline: ${({ $isFocus }) =>
    $isFocus ? "3px dashed " + constants.Color.GreenLight : "none"};
  outline-offset: 2px;
`;

const InputSearch = styled.input`
  box-sizing: border-box;
  height: 100%;
  border: none;
  padding: 0 10px;
  outline: none;
`;

const Button = styled.button`
  ${mixins.ResetButton}
  height: 100%;
  padding: 0 15px;
  background-color: ${constants.Color.Orange};
`;
