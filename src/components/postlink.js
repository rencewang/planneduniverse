import React from "react"
import { Link } from "gatsby"

import '../styles/archive.scss'
// links for archive page

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <div className="archive-title">{post.frontmatter.title}</div> 
    </Link>
    <div className="archive-details">
      on {post.frontmatter.date} <br/>
      in {post.frontmatter.location} <span> </span>
      of {post.frontmatter.type}
    </div>
  </div>
)

export default PostLink