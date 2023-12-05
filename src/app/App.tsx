import { Navigate, Route, Routes } from "react-router-dom";
import { withRouter } from "./providers/withRouter";
import { constants } from "../shared/const";
import { PostsPage } from "../pages/posts-page";
import { withQuery } from "./providers/withQuery";
import styled from "styled-components";
import { PostPage } from "../pages/post-page";

function App() {
  const { BrowserRoute } = constants;

  return (
    <Main>
      <Routes>
        <Route path={BrowserRoute.Main}>
          <Route index element={<Navigate to={`${BrowserRoute.Posts}/1`} />} />
          <Route
            path={`${BrowserRoute.Posts}/:numberPage`}
            element={<PostsPage />}
          />
          <Route path={`${BrowserRoute.Post}/:id`} element={<PostPage />} />
          <Route path={BrowserRoute.NotFound} element={<h2>404</h2>} />
        </Route>
      </Routes>
    </Main>
  );
}

const Main = styled.main`
  padding: 80px;
`;

const AppWithProviders = withRouter(withQuery(App));
export { AppWithProviders as App };
