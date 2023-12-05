import { useQuery } from "@tanstack/react-query";
import { constants } from "../../../shared/const";
import { types } from "../../../shared/types";
import { api } from "../../../shared/api";

const usePost = (id?: string) => {
  return useQuery({
    queryKey: [constants.KeyQuery.Post, id],
    queryFn: async () => {
      const response = await api.getData<types.Post>(
        `${constants.APIRoute.Posts}/${id}`
      );

      return response;
    },
  });
};

export { usePost };
