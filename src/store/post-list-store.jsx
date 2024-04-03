
import { createContext, useReducer,useEffect,useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
 //fetching: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
        /*id: Date.now(),  server will send
       title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags, */
      },
    });
  };

  const addInitialPosts = (posts) => {    //mass replacer for all the posts
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  }; 

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  //const [fetching, setFetching] = useState(false);
//useEffect(fun,[empty means runs at only once//dependancies])
//to handle side effects in functional compos ,fetching data,updataing DOM etc
  /*useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;  //signal is the member of AbortControler

    fetch("https://dummyjson.com/posts", {signal}) //(url,method(get/post))
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {   //Cleanup using returning something
      //console.log("Cleaning up UseEffect."); //component dies/goes
      controller.abort();   //api cl abotrted
    };
  }, []); */


  return (
    <PostList.Provider
      value={{ postList, /*fetching, */ addPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
