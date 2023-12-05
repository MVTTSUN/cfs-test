import { constants } from "../../../shared/const";
import { types } from "../../../shared/types";

const getSearchedPosts = (valueSearch: string, posts?: types.Post[]) => {
  if (!posts) {
    return [];
  }

  return posts.filter((post) => {
    return valueSearch.trim() === ""
      ? true
      : post.title
          .split(" ")
          .reverse()
          .reduce(
            (acc: string[], curr) => (acc.push(`${curr} ${acc}`.trim()), acc),
            []
          )
          .some((el) =>
            el.match(
              RegExp(
                `^${valueSearch
                  .trim()
                  .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}`,
                "i"
              )
            )
          );
  });
};

const getSlicedPosts = (numberPage: number, posts?: types.Post[]) => {
  if (!posts) {
    return [];
  }

  const start = constants.CNT_VIEW_POSTS * (numberPage - 1);

  return posts.slice(start, start + constants.CNT_VIEW_POSTS);
};

export { getSlicedPosts, getSearchedPosts };
