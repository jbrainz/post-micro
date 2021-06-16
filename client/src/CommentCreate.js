import { useState } from "react"
import axios from "axios"

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("")
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    })
    setContent("")
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group m-3">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary m-2">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
