import React, { useEffect, useState } from "react";
import "./Posts.css";
import PostService from "../../services/post.service";
import he from "he";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState();
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
    <section className="latest-posts">
      {posts && (
        <>
          <div className="title">
            <span className="line"></span>
            <h2>Latest Posts</h2>
            <span className="line"></span>
          </div>
          <div className="posts">
            <div className="latest-post-container">
              <Link to={`/post/${posts[0]?.id}`}>
                <div
                  className="latest-post"
                  style={{
                    backgroundImage: `url(${posts[0].jetpack_featured_media_url})`,
                  }}
                >
                  <p>{he.decode(posts[0].title.rendered)}</p>
                </div>
              </Link>
            </div>
            <div className="other-posts">
              {(() => {
                const arr = [];
                for (let i = 1; i <= 4; i++) {
                  arr.push(
                    <>
                      <div className="post">
                        <Link
                          className="flex-post post-link"
                          to={`/post/${posts[i]?.id}`}
                        >
                          <div className="post-img">
                            <img
                              src={posts[i].jetpack_featured_media_url}
                              alt=""
                            />
                          </div>
                          <p>{he.decode(posts[i].title.rendered)}</p>
                        </Link>
                      </div>
                      {i < 4 && <div className="post-divider"></div>}
                    </>
                  );
                }
                return arr;
              })()}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Posts;
