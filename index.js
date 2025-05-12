require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send("hello chinmoy")
})
app.get('/twitter',(req,res)=>{
res.send("chinmoytwiiter")
})
 app.get('/login',(req,res)=>{
    res.send("Please login at chinmoy")
 })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
