import React from "react";
import he from "he";
import { Link } from "react-router-dom";
import "./PostExcerpt.css";

function PostExcerpt({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="post-link">
      <div className="post-excerpt">
        <div className="thumbnail">
          <img src={post?.jetpack_featured_media_url} />
        </div>
        <div className="excerpt">
          <h4>{he.decode(post.title.rendered)}</h4>
          <div className="summary">
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostExcerpt;
