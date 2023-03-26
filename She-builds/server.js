const express = require('express')
const app = express()
const port = 8000
const path=require('path')
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'about.html'))
})
app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname,'history.html'))
})
app.get('/sports', (req, res) => {
  res.sendFile(path.join(__dirname,'sports.html'))
})
app.get('/business', (req, res) => {
  res.sendFile(path.join(__dirname,'business.html'))
})

app.get('/science', (req, res) => {
  res.sendFile(path.join(__dirname,'science.html'))
})

app.get('/activists', (req, res) => {
  res.sendFile(path.join(__dirname,'activists.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})