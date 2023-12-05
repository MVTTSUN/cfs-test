import { BASE_URL } from "../const/const";
import { NotFoundError } from "../lib/errors";

const getData = async <T>(route: string) => {
  const response = await fetch(BASE_URL + route);

  if (response.status === 404) {
    throw new NotFoundError("Not found", 404);
  }

  const data = (await response.json()) as T;

  return data;
};

export { getData };
