import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { createPostAction } from "./Components/CreatePost.jsx";
import Friends from "./Components/Friends.jsx";
import PostList, { postLoader } from "./Components/PostList.jsx";
import Account from "./Components/Account.jsx";

const router = createBrowserRouter([
  /*paths to be used as individual objects*/
  //routes provides re painting of each page,so use route links and to in place of anchor tag
  //for dynamic navigation -use  useNavigate  ex: to directly go to home page after adding a post from CreatePost
  //Loader(fun) -used to do before doing something or before rendering something,it returns loaded data which is available to the next childrens
  //action expects fun ,it works on submitting the form
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> ,loader:postLoader},
      { path: "/CreatePost", element: <CreatePost />, action:createPostAction },
      { path: "/Friends", element: <Friends /> },
      { path: "/Account", element: <Account /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* starts routing*/}
  </React.StrictMode>
);
//default export=no brackets
//normal exports uses brackets
