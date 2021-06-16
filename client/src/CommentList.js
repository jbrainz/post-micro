import { useState, useEffect } from "react"
import axios from "axios"

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://posts.com/posts/${postId}/comments`
    )
    setComments(data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const renderedComments = comments.map((comment) => {
    let content

    if (comment.status === "approved") {
      content = comment.content
    }
    if (comment.status === "pending") {
      content = "This Comment is awaiting approval"
    }
    if (comment.status === "rejected") {
      content = "Sorry you violated our rules"
    }
    return <li key={comment.id}>{content}</li>
  })
  return <ul>{renderedComments}</ul>
}
export default CommentList
