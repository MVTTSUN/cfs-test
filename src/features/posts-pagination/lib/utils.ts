import { constants } from "../../../shared/const";
import { types } from "../../../shared/types";

const getPaginationButtons = (posts?: types.Post[]) => {
  if (!posts) {
    return [];
  }

  const buttons: string[] = [];
  const countPages = Math.ceil(posts.length / constants.CNT_VIEW_POSTS);

  for (let i = 0; i < countPages; i++) {
    buttons.push(String(i + 1));
  }

  return buttons;
};

export { getPaginationButtons };
