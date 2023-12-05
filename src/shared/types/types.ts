type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type NotFoundError = Error;

export type { Post, NotFoundError };
