import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import he from "he";
import PostService from "../../../services/post.service";
import Loader from "../../Loader/Loader";
import "./Post.css";

function Post() {
  let { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    let data = await PostService.fetchPost(id);
    await setPost(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="container">
      {isLoading && <Loader />}
      {post && (
        <>
          <div className="post-header">
            <h2 className="title">{he.decode(post.title.rendered)}</h2>
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post && post.content.rendered }}
          ></div>
        </>
      )}
    </section>
  );
}

export default Post;
