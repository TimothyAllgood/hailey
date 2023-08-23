import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import he from "he";
import Sidebar from "../Sidebar/Sidebar";
import PostService from "../../services/post.service";
import PostExcerpt from "../Posts/PostExcerpt/PostExcerpt";
import Loader from "../Loader/Loader";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [latestPost, setLatestPost] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    let data = await PostService.fetchAllPosts();
    await setLatestPost(data.shift());
    await setPosts(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section>
      {isLoading && <Loader />}
      <div className="blog-header">
        <Link to={`/post/${latestPost?.id}`} className="post-link">
          <div
            className="featured-post"
            style={{
              backgroundImage: `url(${latestPost?.jetpack_featured_media_url})`,
            }}
          >
            {latestPost && (
              <p className="title">{he.decode(latestPost.title.rendered)}</p>
            )}
          </div>
        </Link>
      </div>
      <div className="container-with-sidebar">
        <div className="content">
          {/* <h2>Posts</h2>
          <div className="divider"></div> */}
          <div className="posts">
            {posts &&
              posts.length > 0 &&
              posts.map((post) => {
                return <PostExcerpt key={post.id} post={post} />;
              })}
          </div>
        </div>
        <Sidebar />
      </div>
    </section>
  );
}

export default Blog;
