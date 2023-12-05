import { useQuery } from "@tanstack/react-query";
import { constants } from "../../../shared/const";
import { types } from "../../../shared/types";
import { api } from "../../../shared/api";
import { errors } from "../../../shared/lib";
import { useNavigate } from "react-router";

const usePost = (id?: string) => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: [constants.KeyQuery.Post, id],
    queryFn: async () => {
      try {
        const response = await api.getData<types.Post>(
          `${constants.APIRoute.Posts}/${id}`
        );

        return response;
      } catch (error) {
        if (error instanceof errors.NotFoundError) {
          if (error.statusCode === 404) {
            navigate(constants.BrowserRoute.NotFound, { replace: true });
          }
        }
      }
    },
  });
};

export { usePost };
