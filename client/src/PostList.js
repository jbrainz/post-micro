import { useState, useEffect } from "react"
import axios from "axios"
import CommentCreate from "./CommentCreate"
import CommmentList from "./CommentList"

const PostList = () => {
  const [posts, setPosts] = useState({})

  const fetchPost = async () => {
    const { data } = await axios.get("http://posts.com/posts")
    setPosts(data)
  }
  useEffect(() => {
    fetchPost()
  }, [])
  const renderedPost = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body ">
          <h3>{post.title}</h3>
          <CommmentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    )
  })
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPost}
    </div>
  )
}

export default PostList
