require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
  "login": "Chinmoy94",
  "id": 87663486,
  "node_id": "MDQ6VXNlcjg3NjYzNDg2",
  "avatar_url": "https://avatars.githubusercontent.com/u/87663486?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Chinmoy94",
  "html_url": "https://github.com/Chinmoy94",
  "followers_url": "https://api.github.com/users/Chinmoy94/followers",
  "following_url": "https://api.github.com/users/Chinmoy94/following{/other_user}",
  "gists_url": "https://api.github.com/users/Chinmoy94/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Chinmoy94/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Chinmoy94/subscriptions",
  "organizations_url": "https://api.github.com/users/Chinmoy94/orgs",
  "repos_url": "https://api.github.com/users/Chinmoy94/repos",
  "events_url": "https://api.github.com/users/Chinmoy94/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Chinmoy94/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Chinmoy Manna",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "i am a student",
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-07-19T16:16:31Z",
  "updated_at": "2025-05-12T09:26:56Z"
}
app.get('/', (req, res) => {
  res.send("hello chinmoy")
})
app.get('/twitter',(req,res)=>{
res.send("chinmoytwiiter")
})
 app.get('/login',(req,res)=>{
    res.send("Please login at chinmoy")
 })
 app.get('/github',(req,res)=>{
    res.json(githubData)
 })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
