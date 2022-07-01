import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import Post from "./components/Post";
import PostCard from "./components/PostCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <PostCard />
          </div>
          <div className="d-sm-none d-md-block col-md-4">
            <Recommended />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
