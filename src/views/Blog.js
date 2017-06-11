import React from "react";

const Blog = ({ style }) => (
  <iframe
    title="blogger-blog"
    src="http://mah-tech-blog.blogspot.com/"
    style={{ width: "100%", height: "100vh", ...style }}
  />
);

export default Blog;
