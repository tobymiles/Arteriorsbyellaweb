import React, { useState, useEffect } from "react";
import "../Components/Blogsection";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

// Utils
import api from "../Client";
import { Server } from "../Config";

function Blog({ setBlogPost }) {
  const [blogPosts, setBlogPosts] = useState([]);
  const Navigate = useNavigate();

  const handleBlog = (post) => {
    setBlogPost(post);
    Navigate("/singleblog");
  };

  const getPosts = () => {
    const blogPosts = api.listDocuments(Server.databaseID, Server.collectionID);
    blogPosts.then(
      (res) => {
        setBlogPosts(res.documents);
      },
      (error) => {
        console.error({ error });
      }
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='blog'>
      <div className='blog-heading'>
        <h3>
          Welcome to <br></br> Our Blog
        </h3>
        <p>Find out what's new and see what we're up to</p>
      </div>

      {/* Blog section */}

      <div className='recentblogheader'>
        {" "}
        <h5>Recent Blog Post</h5>
      </div>

      <div className='Blog-gallery'>
        {blogPosts.map((post) => (
          <div key={post?.id} className='Blog-img1'>
            <img src={post?.imageURL} alt='Arteriorimg1' />
            <div id='blog-background'>
              <h4>{post.blogTitle}</h4>
              <div className='blog-status'>
                <p>{post.date}</p>
                <p>{post.postedBy}</p>
                {/* <p>0 Comments</p> */}
              </div>
              <br></br>
              <hr className='solid'></hr>
              <p>{post.blogBody}</p>
              <button className='btn-connect5' onClick={() => handleBlog(post)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
