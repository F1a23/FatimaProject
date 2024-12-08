import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../Features/PostSlice";
import { Table } from "reactstrap";
import moment from "moment";
import { likePost } from "../Features/PostSlice";
import { FaThumbsUp } from "react-icons/fa";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const email = useSelector((state) => state.users.user.email);
  const userId = useSelector((state) => state.users.user._id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLikePost = (postId) => {
    const postData = {
      postId: postId,
      userId: userId,
    };
    dispatch(likePost(postData));
    navigate("/Posts");
  };

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post._id}>
            <div className="card">
              <img
                src={post.profilePic}
                className="card-img-top"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150")
                } // Handle broken image links
              />
              <div className="card-body">
                <h5 className="card-title">{post.email}</h5>
                <p className="card-text">
                  {post.postMsg} <br />
                  <small className="text-muted">
                    {moment(post.createdAt).fromNow()}
                  </small>
                </p>
                <a
                  href="#"
                  className="buttona"
                  onClick={() => handleLikePost(post._id)}
                >
                  Like <FaThumbsUp /> ({post.likes.count})
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
