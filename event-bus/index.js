import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express()
app.use(bodyParser.json())

app.post("/events", (req, res) => {
  const event = req.body
  axios.post("http://post-clusterip-srv:4000/events", event)
  axios.post("http://comments-srv:4001/events", event)
  axios.post("http://query-srv:4002/events", event)
  axios.post("http://moderation-srv:4003/events", event)

  res.send({
    status: "OK",
  })
})

app.listen(4005, () => {
  console.log("Listening on 4005")
})
