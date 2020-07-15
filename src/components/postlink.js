import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} {post.frontmatter.date} {post.frontmatter.location} {post.frontmatter.type} 
    </Link>
  </div>
)

export default PostLink