const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1 style={{color:"Black"}}>Oop's..! There are no posts</h1>
      <button type="button" className="btn btn-primary" onClick={() => window.location.reload(false)} >Fetch Post</button>
    </center>
  );
};

export default WelcomeMessage;