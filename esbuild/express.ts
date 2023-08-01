import express from "express"

const app = express()

// Expose what's in the public folder
app.use(express.static("public"))

app.listen(3100, () => {
  console.log("Listening...")
})
