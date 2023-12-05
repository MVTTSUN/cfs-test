import { useQuery } from "@tanstack/react-query";
import { constants } from "../../../shared/const";
import { types } from "../../../shared/types";
import { api } from "../../../shared/api";

const usePosts = () => {
  return useQuery({
    queryKey: [constants.KeyQuery.Posts],
    queryFn: async () => {
      const response = await api.getData<types.Post[]>(
        constants.APIRoute.Posts
      );

      return response;
    },
  });
};

export { usePosts };
