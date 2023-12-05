const BASE_URL = "https://jsonplaceholder.typicode.com";

const CNT_VIEW_POSTS = 10;

enum APIRoute {
  Posts = "/posts",
}

enum KeyQuery {
  Posts = "posts",
  Post = "post",
}

enum BrowserRoute {
  Main = "/",
  NotFound = "/404",
  Posts = "/posts",
  Post = "/post",
}

enum Color {
  Green = "#7fb77e",
  GreenLight = "#b1d7b4",
  Light = "#f7f6dc",
  Orange = "#ffc090",
}

export { APIRoute, KeyQuery, BrowserRoute, Color, BASE_URL, CNT_VIEW_POSTS };
