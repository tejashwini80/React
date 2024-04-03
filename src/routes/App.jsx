import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import Friends from "../Components/Friends";
import Account from "../Components/Account";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet/> {/*shared regions must be */}
       {/*  {selectedTab === "Home" ? (   //developed in Router
            <PostList></PostList>
          ) : selectedTab === "Friends" ? (
            <Friends></Friends>
          ) : selectedTab === "Account" ? (
            <Account></Account>
          ) : (
            <CreatePost></CreatePost>
          )} */}
         
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
