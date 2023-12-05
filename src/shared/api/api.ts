import { BASE_URL } from "../const/const";

const getData = async <T>(route: string) => {
  const response = await fetch(BASE_URL + route);
  const data = (await response.json()) as T;

  return data;
};

export { getData };
